import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  public id!: number;
  public team:any;
  public items:any;
  constructor(private router:Router, private activatedRouter:ActivatedRoute, private teamService: TeamService, private projectsService:ProjectService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data=>{
      this.id = data['id'];
    });
    this.teamService.getById(this.id).subscribe(
      {
        next: (data) => {this.team = data;console.log(data)},
        error: (error) => {console.log(error);}
      }
    )

    this.projectsService.getAll().subscribe(
      (data) => {
        this.items=data;
        this.items = this.items.filter((item:any) => item.id == this.id);
      }
    )
    
  }

  public back(){
    this.router.navigateByUrl("/myTeams")
  }

  repeat(count: number): number[] {
    return Array(count).fill(0);
  }

}
