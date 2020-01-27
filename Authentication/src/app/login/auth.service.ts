import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { authInterface } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  login(email:string,password:string){
   return this.httpClient.post<authInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCv29IS_-QGgM7poLcl_3Ru-qgdjmQNVuo'
    
      ,{
        "email": email,
        "password": password,
        "returnSecureToken": true
      }

    );
  
  }


  signup(email:string,password:string){
   return this.httpClient.post<authInterface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCv29IS_-QGgM7poLcl_3Ru-qgdjmQNVuo'
      , {
        "email": email,
        "password": password,
        "returnSecureToken": true
      }
    );

  }
}
