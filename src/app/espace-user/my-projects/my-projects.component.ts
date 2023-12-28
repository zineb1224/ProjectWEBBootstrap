import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor() { }
  public subjects:any;

  ngOnInit(): void {
  }
  repeat(count: number): number[] {
    return Array(count).fill(0);
  }

}
