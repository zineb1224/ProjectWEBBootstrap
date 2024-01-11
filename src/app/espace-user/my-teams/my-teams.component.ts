import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  public teams:any;

  ngOnInit(): void {
    this.teamService.getAll().subscribe(
      {
        next: (data) => {this.teams = data; console.log(data)},
        error: (error) => {console.log(error);}
      }
    )
  }

  repeat(count: number): number[] {
    return Array(count).fill(0);
  }

  public formTeams = new FormGroup({
    name: new FormControl('', [Validators.required]),
    goal: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required])
  });

  file!: File;

  onFilechange(event: any) {
    this.file = event.target.files[0]
  }

  addTeam(){
    console.log("submit");
  }

  
}
