var MapData = (()=>{
  var myMap;
  var zoomValue = 14;
  var clientIconUrl = "http://maps.google.com/mapfiles/kml/pal3/icon48.png";
  var driverIconUrl = "http://maps.google.com/mapfiles/kml/pal2/icon39.png";
  var DriverMarker;
  var numDeltas = 100;
  var delay = 10; //milliseconds
  var i = 0;
  var deltaLat;
  var deltaLng;
  var check = true;
  var socketConnectionName='locationUpdate-';
  var driverLocation;
  var prevLocation;
  var Client__Name;
  const socket = io({ transports: ['websocket']});
  
  function initMap(location) {
    myMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: location.lat, lng: location.long },
      zoom: zoomValue
    });
  
    var myLatLng = new google.maps.LatLng(location.lat, location.long);
  
    var myMarkerOptions = {
      position: myLatLng,
      map: myMap,
      icon: {
        url: clientIconUrl
      },
      animation: google.maps.Animation.BOUNCE
    }
    var myMarker = new google.maps.Marker(myMarkerOptions);  
  }
  
  function moveMarker(){
    prevLocation.lat += deltaLat;
    prevLocation.long += deltaLng;
    var latlng1 = new google.maps.LatLng(prevLocation.lat, prevLocation.long);
    DriverMarker.setPosition(latlng1);
    if(i!=numDeltas){
        i++;
        setTimeout(moveMarker, delay);
    }
  }

  function addDriverMarker(driver) {
    var DriverLatLng = new google.maps.LatLng(driver.lat, driver.long);
    var DriverMarkerOptions = {
         position: DriverLatLng,
         map: myMap,
         icon: {
             url: driverIconUrl
         },
         animation: google.maps.Animation.DROP
       }
    DriverMarker = new google.maps.Marker(DriverMarkerOptions);
  }
  function transition(driverLocation){
    i = 0;
    deltaLat = (driverLocation.lat - prevLocation.lat)/numDeltas;
    deltaLng = (driverLocation.long - prevLocation.long)/numDeltas;
    moveMarker();
  }

  return {
    mapInit : function(){
      if('geolocation' in navigator){
        var currentLocation = navigator.geolocation.getCurrentPosition((position)=>{
            var location = {
                lat : position.coords.latitude,
                long : position.coords.longitude
            };
            initMap(location);
        });       
      }
    },
    showMap :function(){
      document.getElementById('button').addEventListener('click',()=>{
        Client__Name = document.getElementById("client-name").value;
        socket.on(socketConnectionName+Client__Name,(data)=>{
          driverLocation = data;
          if(check){//condition will be true only once
            addDriverMarker(driverLocation);
            check = false;
            prevLocation = driverLocation;
          }else{
            transition(driverLocation);
          }
        })
        socket.emit("postClientName",Client__Name);
      });
    }, 
  }
})();


var Controller = ((Mdata)=>{
  return{
    initialize :async function(){
      Mdata.mapInit();
      Mdata.showMap();
    }
  }
})(MapData);
Controller.initialize();