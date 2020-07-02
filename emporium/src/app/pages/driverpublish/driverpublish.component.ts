import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../websocket.service'
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-driverpublish',
  templateUrl: './driverpublish.component.html',
  styleUrls: ['./driverpublish.component.scss']
})

export class DriverpublishComponent implements OnInit {

  drivname;
  item;
  longlats = [78.161166,30.187217]

  constructor(private web:WebsocketService) { }

  ngOnInit(): void {
  }

  sub()
  {
    Observable.interval(3000).takeWhile(() => true).subscribe(() => this.pub());    
  }

  pub(){
    this.item = {};
    this.item.Coordinate = {};
    this.item.Coordinate.Longitude = this.longlats[0] + (Math.random()/100);
    this.item.Coordinate.Latitude = this.longlats[1] + (Math.random()/100);
    this.item.driverName = this.drivname;
    this.web.publishloc(this.item);
    // alert("publishing..")
  }

  statusupdate(Status){
    var driver_name = this.drivname;
    this.web.stat({name:driver_name,status:Status})
  }
  
}