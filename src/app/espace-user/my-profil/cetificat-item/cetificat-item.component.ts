import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cetificat-item',
  templateUrl: './cetificat-item.component.html',
  styleUrls: ['./cetificat-item.component.css']
})
export class CetificatItemComponent implements OnInit {

  @Input() certificat:any;
  constructor() { }

  ngOnInit(): void {
  }

}
