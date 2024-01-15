import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project:any;
  tasks:any=[];
  var_progress:number = 0;
  nbr_tasks:number = 0;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      (data =>{
        this.tasks = data;
        this.tasks = this.tasks.filter((task:any) => task.project_id == this.project.id);
        console.log(this.tasks)
        this.tasks.forEach((element:any) => {
          this.var_progress = this.var_progress + Number(element.progress);
          this.nbr_tasks ++ ;
        });
        this.project.progress = this.var_progress / this.nbr_tasks;
      })
    );


  }


  public formProjects = new FormGroup({
    title: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date_deb: new FormControl('', [Validators.required]),
    date_fin: new FormControl('', [Validators.required])
  });

  file!: File;

  onFilechange(event: any) {
    this.file = event.target.files[0]
  }

  editProject(){
    console.log("submit");
  }

}
