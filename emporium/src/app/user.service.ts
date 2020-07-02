  import { Injectable } from "@angular/core";
  import {  HttpClient } from '@angular/common/http';


  @Injectable()
  export class UserService {
    constructor (private http:HttpClient) {}
    
    gettime(link)
    {
      return this.http.get(link).toPromise();
    }
  } 

