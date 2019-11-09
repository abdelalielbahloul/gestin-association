import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { Toastr } from 'src/app/models/toastr';

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

  constructor( private memberService: MembersService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  addMember(){
    this.memberService._persist(this.newMember)
      .subscribe( res => {
        console.log(res);
        // const toastr: Toastr = {
        //   title: 'added!',
        //   body: res.toString()
        // }
        this.toastrService._success('added', res[0]);

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
