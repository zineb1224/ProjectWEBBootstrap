import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }
 
  getAll(){
    return  this.http.get(`${BASE_URL}/members`);
  }

  getById(id:number):Observable<any>{
    return  this.http.get<any>(`${BASE_URL}/members/${id}`);
  }

  create(member:any):Observable<Member>{
    
     return  this.http.post<Member>(`${BASE_URL}/members`,member);
  }
 
  update(id:number,member:Member):Observable<any>{
     return  this.http.put<any>(`${BASE_URL}/members/${id}`,member);
  }
 
  delete(id:number):Observable<any>{
     return this.http.delete<any>(`${BASE_URL}/members/${id}`)
  }
  
}
