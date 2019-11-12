import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/member';
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  show = false;
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
        if(this.count > 0){
          this.show = true;
          // console.log(this.count);
          
        }
             
      })
  }

  delete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this member if you delete!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.memberService._delete(id)
        .subscribe( () => {
          this.members = this.members.filter( member => member._id != id);
          this.getAll();
        })
        this.toastr.success('Member was deleted successfully!', 'Success!');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your member is safe',
          'error'
        )
      }
    });
  }

}
