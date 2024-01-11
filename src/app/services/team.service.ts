import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
 
  getAll(){
    return  this.http.get(`${BASE_URL}/teams`);
  }

  getById(id:number):Observable<any>{
    return  this.http.get<any>(`${BASE_URL}/teams/${id}`);
  }

  create(team:any):Observable<Task>{
    
     return  this.http.post<Task>(`${BASE_URL}/teams`,team);
  }
 
  update(id:number,team:Team):Observable<any>{
     return  this.http.put<any>(`${BASE_URL}/teams/${id}`,team);
  }
 
  delete(id:number):Observable<any>{
     return this.http.delete<any>(`${BASE_URL}/teams/${id}`)
  }
  
}
