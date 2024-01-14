import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {

  @Input()task:any;
  public member:any;

  constructor(private memberService:MemberService, private router:Router) { }

  ngOnInit(): void {
    this.memberService.getById(this.task.respo_id).subscribe(
      {
        next:(data)=>{
          this.member=data;
        },
        error:(e)=>console.log("Error")
      }
    )
  }

  showProfil(id:number){
    if(id == 1){
      this.router.navigateByUrl("/myProfil")
    }
    else{
      this.router.navigateByUrl("/profilDetail/"+id)
    }
  }

}
