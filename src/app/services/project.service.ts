import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAll(){
    return  this.http.get(`${BASE_URL}/projects`);
  }

  getById(id:number){
    return  this.http.get(`${BASE_URL}/projects/${id}`);
  }
 
  create(project:any){
     return  this.http.post(`${BASE_URL}/projects`,project);
  }
 
  update(project:Project,typeMateriel:{id:number,quantite:number}):Observable<any>{
     return  this.http.put<any>(`${BASE_URL}/projects/${project.id}`,{project:project});
  }
 
  delete(id:number):Observable<any>{
     return this.http.delete<any>(`${BASE_URL}/projects/${id}`)
  }

  
}
