import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  count: Number = 0;
  members: Member[] = [];

  constructor( private memberService: MembersService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.memberService._getAll()
      .subscribe( res => {
        this.members = res;   
        this.count = this.members.length;
             
      })
  }

  delete(id){
    this.memberService._delete(id)
      .subscribe( () => {
        this.members = this.members.filter( member => member._id != id);
        this.toastr.success('member was deleted successfully!', 'Success!');
        this.getAll();
      })
  }

}
