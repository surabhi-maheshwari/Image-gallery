import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
authToken:any;
user:any;

  constructor(private http: Http) { }
  
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).map(res => res.json());
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).map(res => res.json());
  }
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken );
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers}).map(res => res.json());
  }

  storeUserData(token, user){
    //if the user is authenticated
    localStorage.setItem('id_token', token); //key and value
    localStorage.setItem('user', JSON.stringify(user)); //change it into string object cannot be stored
    this.authToken=token;
    this.user=user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken=token;
  }


  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }

  isloggedIn(){
    return tokenNotExpired('id_token');
  }

}
