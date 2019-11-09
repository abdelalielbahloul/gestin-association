import { Injectable } from '@angular/core';
import { Toastr } from '../models/toastr';
declare var toastr:any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  // toastr: Toastr = {
  //   title: '',
  //   body: ''
  // }
  constructor() { }

  _success(title: string, body?: string){
    toastr.success(title, body)
  }
}
