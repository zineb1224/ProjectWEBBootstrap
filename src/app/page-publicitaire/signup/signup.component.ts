import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formSignup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    tele: new FormControl("", [Validators.required]),
    birth: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmpassword: new FormControl("", [Validators.required])
  });

  signUp(){
    
  }

}
