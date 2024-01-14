import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  public tasks:any;
  public project:any;
  constructor(private taskService: TaskService, private projectService:ProjectService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      {
        next: (data) => {
          this.tasks = data;
          this.tasks = this.tasks.filter((task:any)=> task.respo_id == 1)
          console.log(data);
        },
        error: (error) => {console.log(error);}
      }
    )
  }

  repeat(count: number): number[] {
    return Array(count).fill(0);
  }

}
