import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project:any;

  constructor() { }

  ngOnInit(): void {
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
