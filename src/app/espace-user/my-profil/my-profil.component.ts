import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  public member:any;
  public skills:any=[];
  public certificats:any=[];

  ngOnInit(): void {
    this.memberService.getById(1).subscribe(
      {
        next: (data) => { this.member = data;
          console.log(this.member.certificats)
          this.certificats = this.member.certificats;
          this.skills = this.member.skills;
        },
        error: (error) => { console.log(error); }
      }
    )
  }

  public formEdit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl("", [Validators.required]),
    num: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    oldPassword: new FormControl("", [Validators.required]),
    newPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });

  public formSkills = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  public formCertificats = new FormGroup({
    title: new FormControl('', [Validators.required]),
    name_etablishment: new FormControl('', [Validators.required])
  });

  public addSkill(){

  }

  public addCertificat(){

  }

  public editImg() {
  }

  public modifier() {}

  onFilechange(event: any) {
  }

}
