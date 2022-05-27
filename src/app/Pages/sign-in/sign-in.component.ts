import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user:any={
    "email":"",
    "password":""
  }

  notEmail:boolean = false
  regex : RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  constructor() { }

  ngOnInit(): void {
  }
  
  validateEmail(){
    if(!this.regex.test(this.user.email || this.user.password <6)){
      this.notEmail = true
    }else{
      this.notEmail = false

    }
  }

  sendUser(){
    if(!this.regex.test(this.user.email || this.user.password <6)){
    }else{
      this.notEmail = false
    }
  }

}
