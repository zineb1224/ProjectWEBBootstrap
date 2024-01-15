import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:any;
  public project:any;
  public isShown:boolean = false;
  constructor(private projectsService: ProjectService, private taskservice:TaskService) { }

  public showDetails(){
    this.isShown = ! this.isShown;
  }

  ngOnInit(): void {
    this.projectsService.getById(this.task.project_id).subscribe(
      (data) => this.project = data
    )
  }

  public formtasks = new FormGroup({
    title: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date_deb: new FormControl('', [Validators.required]),
    date_fin: new FormControl('', [Validators.required]),
    progress: new FormControl('', [Validators.required])
  });

  editTask(){}
  delete(id:number){
    this.taskservice.delete(id).subscribe(
      ()=>{}
    )
  }
}
