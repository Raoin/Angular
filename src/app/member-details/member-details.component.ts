import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersService } from '../members.service';
import {  Member } from '../member';


@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

    members!: Member[];

  constructor(private membersService: MembersService){}
  
  ngOnInit(): void{

    this.getMembers();
            
  }
    private getMembers(){

      this.membersService.getMembersList().subscribe(data=> {
         //console.log(data);
           this.members=data; 
      });
            
    }
  }
