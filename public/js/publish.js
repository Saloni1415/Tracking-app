const socket = io({ transports: ['websocket']});
document.getElementById('submit').addEventListener("click",()=>{
  var driver_name = document.getElementById('driverName').value;
  var longlats = [78.161166,30.187217]
  const socket = io({ transports: ['websocket'] });

  setInterval(function() {
      var item = {};
      item.Coordinate = {};
      item.Coordinate.Longitude = longlats[0] + (Math.random()/100);
      item.Coordinate.Latitude = longlats[1] + (Math.random()/100);
      item.name = driver_name;
      socket.emit('lastKnownLocation', item);
  }, 5000);
});


function statusupdate(Status){
  var driver_name = document.getElementById('driverName').value;
  socket.emit('status',{
    name : driver_name,
    status : Status
  })
}
