import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {

  @Input()item:any;
  public tasks:any;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      {
        next:(data)=>{
          this.tasks=data;
          this.tasks = this.tasks.filter((task:any) => task.project_id == this.item.id);
        },
        error:(e)=>console.log("Error al obtener las tareas")
      }
    )
  }

  repeat(count: number): number[] {
    return Array(count).fill(0);
  }

}
