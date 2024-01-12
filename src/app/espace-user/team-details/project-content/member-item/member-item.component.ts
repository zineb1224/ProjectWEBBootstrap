import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {

  @Input()task:any;
  constructor() { }

  ngOnInit(): void {
  }

}
