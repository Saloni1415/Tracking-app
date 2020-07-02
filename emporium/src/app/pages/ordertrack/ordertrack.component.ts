
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {} from 'googlemaps';
import { AgmCoreModule,AgmMap, MapsAPILoader } from "@agm/core";
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../../user.service';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-ordertrack',
  templateUrl: './ordertrack.component.html',
  styleUrls: ['./ordertrack.component.scss']
})
export class OrdertrackComponent implements OnInit {

  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
@ViewChild('track') trackButton: ElementRef;
@ViewChild('inputname') clientinput : ElementRef;
socket;  
lat;
  lng;
  // zoom;   
  driverLat;
  driverLong;
  frames = 100;
  prevLocationLat;
  prevLocationLong;
  deltaLat = 0 ;
  deltaLng = 0;
  clientNameInput : string;
  i:number =  0;
  delay: 0.01;
  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  public orderStatus = "Order Closed"
  clientIcon:string = "http://maps.google.com/mapfiles/kml/pal3/icon48.png";
  driverIcon:String = "http://maps.google.com/mapfiles/kml/pal2/icon39.png";
  constructor(private user:UserService ) {
    this.socket = io.connect('http://localhost:3000/');
   }

  link='https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyA07KeDT_58GiLqRtkF29Lb3bfiDS3IXuo'
  iconloc:string=
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzzBFBm89uos6KJk-2kXKfKYlHT_jcq6x4_eaw_44PHVeDoDYd&usqp=CAU'
    // scaledSize: {
    //     width: 40,
    //     height: 60
    // }


    
  iconh:number=20;
    // google maps zoom level
    zoom: number = 16;

    // initial center position for the map
  
    currentPos: point = {
      lat: 50.082730,
      lng: 14.431697
    };
    points: point[] = [];
    // driversList: point[] = [];
    drivers={    lat:50.083200,
          lng: 14.430987};
    tmpPoints: point[] = [{
          lat: 50.082911,
          lng: 14.431411
        },{
          lat: 50.083644,
          lng: 14.430367
        }];

        gettime()
        {
          var time=this.user.gettime(this.link);
          alert(time['rows']['elements']['duration']['text']);
        }

        calculateDistance() {
          alert("in calc function..");  
          const mexicoCity = new google.maps.LatLng(119.432608, -99.133209);
          const jacksonville = new google.maps.LatLng(40.730610, -73.935242);
          const distance = google.maps.geometry.spherical.computeDistanceBetween(mexicoCity, jacksonville);
          alert("the distance calc is:"+ distance);
        }

  ngOnInit(): void {
    let i = 0;
    const obs = Observable.interval(500)
      .takeWhile((v) =>  i < this.tmpPoints.length)
      .subscribe(() => {
        const pos = this.tmpPoints[i];
        this.points.push(pos);
        // this.driversList.push(pos);
        this.currentPos = pos;
        i++;
      })
      this.gettime();
      // this.calculateDistance();
  }
  get() {  
    if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: Position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
            } 
        })  
    }
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


  showMap(){
    let runOnce =true;
    let client_name = this.clientinput.nativeElement.value;
      if(client_name!=null)
      this.socket.emit("postClientName",client_name);
      this.socket.on("locationUpdate-"+client_name,(driverLocation)=>{
        if(runOnce){
          this.driverLat = driverLocation.lat;
          this.driverLong = driverLocation.long;
          runOnce = false;
          this.prevLocationLat = driverLocation.lat;
          this.prevLocationLong = driverLocation.long;
        }else{
          this.animate(driverLocation);
        }
      });
    
  }

  mapClicked(){}
  


}

interface point {
  lat: number;
  lng: number;
}
