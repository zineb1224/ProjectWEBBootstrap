import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formEdit = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl("", [Validators.required]),
    num: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    oldPassword: new FormControl("", [Validators.required]),
    newPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });


  public editImg() {
    
  }

  public modifier() {}

  onFilechange(event: any) {
    
  }

}
