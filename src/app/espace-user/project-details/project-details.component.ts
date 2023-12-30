import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public back(){
    this.router.navigateByUrl("/espaceUser")
  }

}
