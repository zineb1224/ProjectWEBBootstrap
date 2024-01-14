import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-certi',
  templateUrl: './item-certi.component.html',
  styleUrls: ['./item-certi.component.css']
})
export class ItemCertiComponent implements OnInit {

  @Input() certificat:any;
  constructor() { }

  ngOnInit(): void {
  }

}
