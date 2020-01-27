import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth:AuthService) { }
  isloginview=true;

  onSwitchButtonClick(){
    this.isloginview = !this.isloginview;
    this.isSignUp=false;     

  }
  isSignUp=false;
  haveError= false;
  isLogin=false;
  ngOnInit() {
  }
  onLoginButtonClick(login){

    console.log(login);
    if(this.isloginview){

      // debugger;
    
    this.auth.login(login.email,login.pswd).subscribe(s=>console.log(s),
    error=>{
     this.haveError=true;
     this.isLogin=false;
    },()=>{
      this.isLogin=true;
      this.haveError=false;
    });
    console.log(login.email);
    console.log(login.pswd);
  }

  if (!this.isloginview) {
    this.auth.signup(login.email,login.pswd).subscribe(s=>console.log(s),
    error=>{
      this.haveError = true;
      this.isLogin = false;
    },()=>{
      this.isSignUp=true;
    });
    
    
  }
}
}
