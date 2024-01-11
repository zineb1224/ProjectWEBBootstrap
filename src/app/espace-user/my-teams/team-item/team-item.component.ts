import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {

  @Input() team:any;
  constructor() { }

  ngOnInit(): void {
  }

}
