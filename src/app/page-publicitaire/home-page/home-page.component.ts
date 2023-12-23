import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    tasks: string[] = ['Tâche 1', 'Tâche 2', 'Tâche 3'];
    newTask: string = '';
  
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    }

}
