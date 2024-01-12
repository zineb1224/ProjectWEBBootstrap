import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private router:Router, private activatedRouter:ActivatedRoute, private projectService:ProjectService, private teamService:TeamService, private taskService:TaskService) { }

  public id!: number;
  public project:any;
  public team:any;
  public tasks:any;

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

    this.taskService.getAll().subscribe(
      {
        next:(dataTasks)=>{
          this.tasks = dataTasks ;
          this.tasks = this.tasks.filter((task:any) => task.project_id == this.id);
          console.log(this.tasks)
        }
      }
    )



  }

  public back(){
    this.router.navigateByUrl("/espaceUser")
  }

}
