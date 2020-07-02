var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
const socket = require('socket.io');
var port = process.env.PORT || 3000;
const {MongoClient} = require('mongodb');
var database;
var count=0;
var DatabaseName = 'DetailsForLiveTracker';
var collectionName = 'DriverDetails';

const crossOriginURL = "*";
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin' , crossOriginURL);
    // res.append('Access-Control-Allow-Origin' , crossOriginURL1);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});
(async function main(){
    const uri = 'mongodb+srv://Anubhav:BeXNfG5WcGjBZmPF@cluster0-2n6p2.mongodb.net/test';
    const client = new MongoClient(uri,{
        useUnifiedTopology: true
    });
    
    try {
        await client.connect((err,db)=>{
            if(err) throw err;
            console.log('Database Loaded');
            database = db;
            //addData(db,'anubhav','mike','dispatched');
        });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
})();

function addData(db,clientName,driverName,driverstatus){
    var dbo = db.db(DatabaseName);
    var myobj = {
        name : driverName,
        Client_Name : clientName,
        location : {
            lat : null,
            long : null
        },
        status : driverstatus
    };
    myobj.name = ((myobj.name).trim()).toLowerCase();
    myobj.Client_Name = ((myobj.Client_Name).trim()).toLowerCase();
    dbo.collection(collectionName).insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
}

function updateData(myquery,newvalues){
    var dbo = database.db(DatabaseName);
    dbo.collection(collectionName).updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
    });
}

async function getClientName(clientName,driverName){
    var dbo = database.db(DatabaseName);
    await dbo.collection(collectionName).find({ }).forEach((data)=> { 
        if(data.name == driverName){
            clientName.name = data.Client_Name;
        }
    }); 
}



async function updateLocation(driver,clientName){
    var dbo = database.db(DatabaseName);
    await dbo.collection(collectionName).find({ }).forEach((data)=> { 
        if(data.name == driver.name){
            clientName.name = data.Client_Name;
            var driverlocation = {
                lat : driver.location.lat,
                long : driver.location.long
            }
            var myquery = { name: driver.name };
            var newvalues = { $set: {location : driverlocation} };
            updateData(myquery,newvalues);
        }
    }); 
}

async function getLocation(clientName,driver){
    var dbo = database.db(DatabaseName);
    if(driver.location!=null)
    await dbo.collection(collectionName).find({ }).forEach((data)=> { 
        if(data.Client_Name == clientName){
            driver.status = data.status;
            driver.location.lat = data.location.lat;
            driver.location.long = data.location.long;
        }
    });
}


// // Start the Server
// http.listen(port, function () {
//     console.log('Server Started. Listening on *:' + port);
// });

const server = app.listen(port, () => {
    console.log("Server started on port " + port);
  });

const io = socket.listen(server);


// Express Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// // Render Main HTML file
// app.get('/', function (req, res) {
//     res.sendFile('views/index.html', {
//         root: __dirname
//     });
// });

// app.get('/publish', function (req, res) {
//     res.sendFile('views/publisher.html', {
//         root: __dirname
//     });
// });

io.on('connection', function (socket) {
    console.log('No. of sockets ' + ++count);
    socket.on('disconnect', function() {
      --count;
      console.log('One person disconnected!');
      console.log('Now, no. of sockets : ' + count);
   });

   socket.on("postClientName",(clientName)=>{
        var driver = {
            location : {
                long: 123,
                lat : 456
            },
            status : 'dispatched'
        };
        getLocation(clientName,driver).then(()=>{
            if(driver.location!=null){
                io.emit('update-' + clientName,driver); 
            }
        })
   })

   socket.on('lastKnownLocation',function (data) {
        var client = {
            name : 'xyz'
        };
        
        if(data!=null){
            var driver = {
                name : data.name,
                location : {
                    long: data.Coordinate.Longitude,
                    lat : data.Coordinate.Latitude
                },
                status : null
            }; 
            updateLocation(driver,client).then(()=>{
                io.emit('update-' + client.name, driver);
            }); 
        }   
    });

    socket.on('status',function(data){ 
        if(data){
            var myquery = { name: data.name };
            var newvalues = { $set: {status : data.status} };
            updateData(myquery,newvalues)
        }
        client = {
            name : 'xyz'
        }
        getClientName(client,data.name).then(()=>{
            io.emit('status-'+client.name,data.status);
        }) 
    });

});
