import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
 
  getAll(){
    return  this.http.get(`${BASE_URL}/tasks`);
  }

  getById(id:number):Observable<any>{
    return  this.http.get<any>(`${BASE_URL}/tasks/${id}`);
  }

  create(task:any):Observable<Task>{
    
     return  this.http.post<Task>(`${BASE_URL}/tasks`,task);
  }
 
  update(id:number,task:Task):Observable<any>{
     return  this.http.put<any>(`${BASE_URL}/tasks/${id}`,task);
  }
 
  delete(id:number):Observable<any>{
     return this.http.delete<any>(`${BASE_URL}/tasks/${id}`)
  }
  
}
