import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
 
  private socket = io('http://localhost:3000');
  constructor() { }

  // newMessageReceived() {
  //   const observable = new Observable<{ user: String, message: String}>(observer => {
  //     this.socket.on('new message', (data) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };
  //   });
  //   return observable;
  // }

  // typing(data) {
  //   this.socket.emit('typing', data);
  // }

  // receivedTyping() {
  //   const observable = new Observable<{ isTyping: boolean}>(observer => {
  //     this.socket.on('typing', (data) => {
  //       observer.next(data);
  //     });
  //     return () => {
  //       this.socket.disconnect();
  //     };
  //   });
  //   return observable;
  // }








  publishloc(item) {
    this.socket.emit('lastKnownLocation', item);
  }


  postclientname(client){
    this.socket.emit("postClientName",client);
  }

  stat(driv){
    this.socket.emit('status',driv);
  }









}
