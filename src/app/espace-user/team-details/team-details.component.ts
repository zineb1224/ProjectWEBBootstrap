import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public back(){
    this.router.navigateByUrl("/myTeams")
  }

  repeat(count: number): number[] {
    return Array(count).fill(0);
  }

}
