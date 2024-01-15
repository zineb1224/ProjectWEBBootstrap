import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  member:Member = {
    nom: '',
    email: '',
    telephone: '',
    date_naissance: '',
    cin: '',
    description: ''
  }
  members:any;
  memberchech:any;
  constructor(private memberService:MemberService, private router:Router) { }

  ngOnInit(): void {
    this.memberService.getAll().subscribe(
      (data)=>{
        this.members = data;
        console.log("Data Loaded")
      }
    )
  }

  public formSignup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    cin: new FormControl("", [Validators.required]),
    tele: new FormControl("", [Validators.required]),
    birth: new FormControl("", [Validators.required]),
    gender: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+-]+[a-z0-9.-]')]),
    confirmpassword: new FormControl("", [Validators.required, Validators.pattern('[a-z0-9._%+-]+[a-z0-9.-]')])
  });

  signUp(){
    if (this.formSignup.valid) {
      this.memberchech = this.members.find((person:any) => person.email == this.formSignup.get("email")?.value)
    if(this.memberchech != undefined)
    {
      alert("email already found ! ")
    }
    else{
        this.member.nom = this.formSignup.get("name")?.value;
        this.member.email = this.formSignup.get("email")?.value;
        this.member.cin = this.formSignup.get("cin")?.value;
        this.member.sexe = this.formSignup.get("gender")?.value;
        this.member.date_naissance = ''+this.formSignup.get("birth")?.value;
        this.member.telephone = this.formSignup.get("tele")?.value;
        this.member.password = this.formSignup.get("password")?.value;
  
        this.memberService.create(this.member).subscribe(
          data =>{console.log(data); alert("Inscription réussie");}
        )
        this.router.navigateByUrl("/espaceUser")
      }

    }
  }

}
