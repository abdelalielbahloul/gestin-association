import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];

  constructor( private memberService: MembersService ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.memberService._getAll()
      .subscribe( res => {
        this.members = res;        
      })
  }

}
