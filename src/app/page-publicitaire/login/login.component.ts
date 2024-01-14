import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public member:any;
  public members:any;
  public emailcorrect:boolean=false;
  public emailincorrect:boolean=false;
  public passwordincorrect:boolean=false;

  constructor(private memberService: MemberService, private router:Router) { }

  ngOnInit(): void {
    this.memberService.getAll().subscribe(
      (data)=>{
        this.members = data;
        console.log("Data Loaded")
      }
    )
  }

  public formLogin = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password: new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+-]+[a-z0-9.-]')])
  });
  
  login(){
    if (this.formLogin.valid) {
    this.member = this.members.find((person:any) => person.email == this.formLogin.get("email")?.value)
    console.log(this.member)
    if(this.member != undefined)
    {
      this.emailcorrect = true;
      this.emailincorrect = false;
      if(this.member.password == this.formLogin.get("password")?.value){
        this.router.navigateByUrl("/espaceUser")
      }
      else
        this.passwordincorrect = true
    }
    else{
      this.emailincorrect = true;
    }
  }
  }

}
