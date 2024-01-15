import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { TaskService } from 'src/app/services/task.service';
import { TeamService } from 'src/app/services/team.service';
import { Task } from 'src/app/models/task';
@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {

  @Input()item:any;
  public tasks:any;
  public members:any;
  public team:any;
  public members_option:any=[];
  id: any;
  task:Task ={
    titre:'',
    description:'',
    status:'in progress',
    progress:'0',
    date_debut:'',
    date_fin:'',
    respo:'',
    respo_id:0,
    project_id:0
  }

  constructor(private taskService:TaskService, private memberService:MemberService, private teamService:TeamService) { }

  public formTasks = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date_deb: new FormControl('', [Validators.required]),
    date_fin: new FormControl('', [Validators.required]),
    respo: new FormControl('', [Validators.required])
  });
  selectedMember:any= { id:0, nom: '' };
  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      {
        next:(data)=>{
          this.tasks=data;
          this.tasks = this.tasks.filter((task:any) => task.project_id == this.item.id);
        },
        error:(e)=>console.log("Error al obtener las tareas")
      }
    )
    this.id = localStorage.getItem("id_team")
    this.teamService.getById(this.id).subscribe(
      (data_teams)=>{
        this.team = data_teams;
        this.members = this.team.members
        console.log(this.members)
        this.members.forEach((id_member: any) => {
          console.log(id_member.member_id)
          this.memberService.getById(id_member.member_id).subscribe(
            (infoMember: any) =>{
              this.members_option.push(infoMember);
              console.log(infoMember)
            }
          )
        });
      }
    )
  }

  asignTask(){
    this.task.titre = this.formTasks.get("title")?.value;
    this.task.description = this.formTasks.get("description")?.value;
    this.task.date_debut = "" + this.formTasks.get("date_deb")?.value;
    this.task.date_fin = "" + this.formTasks.get("date_fin")?.value;
    this.task.project_id = this.item.id;
    this.task.respo = this.selectedMember?.nom;
    this.task.respo_id = this.selectedMember?.id;
    this.taskService.create(this.task).subscribe(
      {
        next: (data) => {console.log(data)},
        error: (error) => {console.log(error);}
     }
    )
  }

}
