import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-profil',
  templateUrl: './member-profil.component.html',
  styleUrls: ['./member-profil.component.css']
})
export class MemberProfilComponent implements OnInit {

  constructor(private memberService:MemberService, private activatedRouter:ActivatedRoute, private router:Router) { }

  public member:any;
  public skills:any=[];
  public certificats:any=[];
  public id!: number;
  public url:any;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data=>{
      this.id = data['id'];
    });
    this.memberService.getById(this.id).subscribe(
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

  back(){
    this.url = localStorage.getItem("url")
    this.router.navigateByUrl(this.url)
  }


}
