import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(private projectService:ProjectService) { }
  public projects:any;

  ngOnInit(): void {
    this.projectService.getAll().subscribe(
      {
        next: (data) => {this.projects = data; console.log(data)},
        error: (error) => {console.log(error);}
      }
    )
  }

  repeat(count: number): number[] {
    return Array(count).fill(0);
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

  addProject(){
    console.log("submit");
  }

}
