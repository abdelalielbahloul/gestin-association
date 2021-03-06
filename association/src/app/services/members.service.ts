import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  apiMembers = "http://localhost:2000"
  constructor( private http: HttpClient) { }

  _getAll(){
    return this.http.get<Member[]>(`${this.apiMembers}/members`)
  }
  _persist(member){
    return this.http.post(`${this.apiMembers}/members`,member);
  }
  _delete(id){
    return this.http.delete(`${this.apiMembers}/members/${id}`);
  }
}
