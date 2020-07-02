import { Component, ViewChild,ElementRef, OnInit } from '@angular/core';
import {AgmMap  } from '@agm/core';
import * as io from 'socket.io-client';
import {} from 'googlemaps';

@Component({
  selector: 'app-userloc',
  templateUrl: './userloc.component.html',
  styleUrls: ['./userloc.component.scss']
})

export class UserlocComponent implements OnInit {

@ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
@ViewChild('track') trackButton: ElementRef;
@ViewChild('inputname') clientinput : ElementRef;
@ViewChild('deliverystatus') deliveryStatus : ElementRef
  lat;
  lng;
  status;
  zoom;   
  driverLat;
  driverLong;
  frames = 100;
  prevLocationLat;
  prevLocationLong;
  socket;
  deltaLat = 0 ;
  deltaLng = 0;
  clientNameInput : string;
  i:number =  0;
  delay: 0.01;
  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["reached seller house","Order Picked","Shipped",
  "Out for Delivery", "Delivered"];
  public orderStatus = "";
  public orderBar = "";
  clientIcon:string = "http://maps.google.com/mapfiles/kml/pal3/icon48.png";
  driverIcon:String = "http://maps.google.com/mapfiles/kml/pal2/icon39.png";
  

  get() {  
    //this.distanceMatrixApi();
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: Position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
            } 
        })  
    }
  }

  

  distanceMatrixApi(){
    let service = new google.maps.DistanceMatrixService();
    let origin1 = new google.maps.LatLng(55.930385, -3.118425);
    
    var destinationB = new google.maps.LatLng(50.087692, 14.421150);
  
    service.getDistanceMatrix({
      origins : [origin1],
      destinations: [destinationB],
      travelMode:google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: new Date(Date.now() + 10),  // for the time N milliseconds from now.
        trafficModel: google.maps.TrafficModel.OPTIMISTIC
      },
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false,
      region: 'Dehradun'
    },(res,status)=>{
      alert(status);
      console.log(res.rows[0].elements[0].distance);
    })
  }
  
  moveMarker(){
   {
      this.prevLocationLat = this.prevLocationLat + this.deltaLat;
      this.prevLocationLong =this.prevLocationLong + this.deltaLng;
      this.driverLat = this.prevLocationLat;
      this.driverLong = this.prevLocationLong;
      if(this.i <= 100){
        (this.i)++;
        setTimeout(()=>{this.moveMarker();},10);
      }
    }
    
  }

  animate(driverLocation){
    this.i=0;
    this.deltaLat = (driverLocation.lat - this.prevLocationLat)/100;
    this.deltaLng = (driverLocation.long - this.prevLocationLong)/100;
    this.moveMarker();
  }

  updateStatus(){
    
  }


  showMap(){
    let runOnce =true;
    let client_name = this.clientinput.nativeElement.value;
      if(client_name!=null)
      this.socket.emit("postClientName",client_name);
      
      this.socket.on('status-' + client_name,data=>{
        this.status = data;
        this.deliveryStatus.nativeElement.textContent = this.status;
      })

      this.socket.on("update-"+client_name,(driver)=>{
        if(runOnce){
          this.driverLat = driver.location.lat;
          this.driverLong = driver.location.long;
          runOnce = false;
          this.status = driver.status;
          this.deliveryStatus.nativeElement.textContent = this.status;
          this.orderStatus=this.status;
          this.orderBar=this.status;
          // alert(this.orderStatus);
          alert(this.orderBar);
          this.prevLocationLat = driver.location.lat;
          this.prevLocationLong = driver.location.long;
        }else{
          this.animate(driver.location);
        }
      });
    
  }

  constructor() {
    this.socket = io.connect('http://localhost:3000/');
  }  

  ngOnInit(): void {
    this.get()  
    this.agmMap.triggerResize(true);  
    this.zoom = 14;
  }
}
