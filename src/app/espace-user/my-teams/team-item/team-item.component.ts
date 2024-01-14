import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() team:any;
  public members:any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  public showmembers(){
    this.members = this.team.members;
  }

  public showteamDetails(){
    localStorage.clear()
    localStorage.setItem("url", '/teamDetail/'+ this.team.id)
  }
}
