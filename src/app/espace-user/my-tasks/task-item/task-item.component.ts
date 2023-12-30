import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  public isShown:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public showDetails(){
    this.isShown = ! this.isShown;
  }

}
