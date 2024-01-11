import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private router:Router, private activatedRouter:ActivatedRoute, private projectService:ProjectService, private teamService:TeamService) { }

  public id!: number;
  public project:any;
  public team:any;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(data=>{
      this.id = data['id'];
    });
    this.projectService.getById(this.id).subscribe(
      {
        next: (data) => {
          this.project = data;
          console.log(data);
          this.teamService.getById(this.project.team_id).subscribe({
            next: (dataTeam) => {
              this.team = dataTeam;
            }
          }
          )
        },
        error: (error) => {console.log(error);}
      }
    )
  }

  public back(){
    this.router.navigateByUrl("/espaceUser")
  }

}
