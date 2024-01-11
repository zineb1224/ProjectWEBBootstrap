import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:any;
  public isShown:boolean = false;
  constructor() { }

  public showDetails(){
    this.isShown = ! this.isShown;
  }

  ngOnInit(): void {
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
  

}
