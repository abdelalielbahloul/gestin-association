import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';
// import { ToastrService } from 'src/app/services/toastr.service';
import { ToastrService } from "ngx-toastr";

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

  constructor( private memberService: MembersService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  addMember(){
    this.memberService._persist(this.newMember)
      .subscribe( res => {
        this.toastr.success('Member created successufuly', 'success');

      },err => {
        this.toastr.error('Member not created an error has occured', 'error!')
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
