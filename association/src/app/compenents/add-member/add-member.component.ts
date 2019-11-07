import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  newMember: Member = {
    fullName: '',
    role: '',
    cin: '',
    email: ''
  }

  constructor( private memberService: MembersService) { }

  ngOnInit() {
  }

  addMember(){
    this.memberService._persist(this.newMember)
      .subscribe( res => {
        console.log(res);
        this.reset();
        
      },err => {
        console.log(err);
        
      })
    
  }

  reset(){
    this.newMember = {
      fullName: '',
      role: '',
      cin: '',
      email: ''
    }
  }

}
