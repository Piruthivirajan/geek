import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Event}  from './Event';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'login',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [EventService]
})
export class UserComponent {
  public ngForm: FormGroup; 
 private id:number;
  public name:string;
  public password:string;

    constructor(public eventservice:EventService,private router: Router) {
      
    }
    ngOnInit() {
    }

submitForm(value:any){
 if("check"==value.name && "check"==value.password){
 this.router.navigateByUrl('/report');
 }else{alert("Enter correct Username & Password");}
}
goto(){
  this.router.navigateByUrl('/');
}
}
