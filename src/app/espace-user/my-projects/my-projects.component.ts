import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(private projectService:ProjectService) { }
  public projects:any;
  filterProjects:any = '';
  data:any;
  project : Project={
    titre: '',
    image: '',
    description: '',
    progress: 0,
    type: '',
    date_debut: '',
    date_fin: ''
  }

  ngOnInit(): void {
    this.projectService.getAll().subscribe(
      {
        next: (data) => {
          this.projects = data;
          this.data = data;
           console.log(data)},
        error: (error) => {console.log(error);}
      }
    )
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

  searchFilter() {
    // console.log(event);
    let filter = {
      nom: this.filterProjects
    }
    this.projects = this.data.filter((row: any) => this.isExit(row.titre, filter));
    console.log(this.projects)
  }

  isExit(row: any, filter: any): boolean {
    let findings = true;
  
    Object.keys(filter).forEach((key) => {
      const textToSearch = (row[key] && typeof row[key] === "string" && row[key].toLowerCase()) || '';
      const res = textToSearch.indexOf(filter[key]) !== -1;
  
      if (!res) {
        findings = false;
      }
    });
  
    return findings;
  }

  
}
