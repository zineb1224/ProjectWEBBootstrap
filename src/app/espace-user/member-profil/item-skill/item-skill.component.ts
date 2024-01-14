import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit {

  @Input()skill:any;
  constructor() { }

  ngOnInit(): void {
  }

}
