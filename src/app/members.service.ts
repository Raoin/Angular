import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MembersService { 

private baseURL= "http://localhost:8080/members";
//https://cors-anywhere.herokuapp.com/
  constructor(private httpClient: HttpClient) {}

  getMembersList(): Observable<Member[]>{
    return this.httpClient.get<Member[]>(`${this.baseURL}`);

  }

  }


