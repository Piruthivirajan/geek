import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Event}  from './Event';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [EventService]
})
export class RegisterComponent {
 model = new Event();
 register:Event;
che:boolean=false;
  other:boolean=false;
  newclg:string="";
defaultValue:string='0';
  
  junkc:boolean=false;
 trixc:boolean=false;
 facec:boolean=false;
 geekadzc:boolean=false;
 zorroc:boolean=false;
 quizc:boolean=false;
 meshc:boolean=false;
 tangoc:boolean=false;
 //junk
 junkpname1:string="";
 junkdept1:string="";
 junkcontact1:number;
 junkemail1:string="";

 junkpname2:string="";
 junkdept2:string="";
 junkcontact2:number;
 junkemail2:string="";
//trix
 tjunkpname1:string="";
 tjunkdept1:string="";
 tjunkcontact1:number;
 tjunkemail1:string="";

 tjunkpname2:string="";
 tjunkdept2:string="";
 tjunkcontact2:number;
 tjunkemail2:string="";
//face
fjunkpname1:string="";
 fjunkdept1:string="";
 fjunkcontact1:number;
fjunkemail1:string="";

 fjunkpname2:string="";
fjunkdept2:string="";
fjunkcontact2:number;
fjunkemail2:string="";
//adv
ajunkpname1:string="";
 ajunkdept1:string="";
 ajunkcontact1:number;
 ajunkemail1:string="";

 ajunkpname2:string="";
 ajunkdept2:string="";
 ajunkcontact2:number;
 ajunkemail2:string="";
 //zorro
 zjunkpname1:string="";
 zjunkdept1:string="";
 zjunkcontact1:number;
 zjunkemail1:string="";

 zjunkpname2:string="";
zjunkdept2:string="";
 zjunkcontact2:number;
 zjunkemail2:string="";
 //Quicz
 qjunkpname1:string="";
 qjunkdept1:string="";
qjunkcontact1:number;
 qjunkemail1:string="";

 qjunkpname2:string="";
  qjunkdept2:string="";
 qjunkcontact2:number;
 qjunkemail2:string="";
 //mesh
 mjunkpname1:string="";
 mjunkdept1:string="";
 mjunkcontact1:number;
 mjunkemail1:string="";

 mjunkpname2:string="";
 mjunkdept2:string="";
 mjunkcontact2:number;
 mjunkemail2:string="";
//Tango
tajunkpname1:string="";
tajunkdept1:string="";
 tajunkcontact1:number;
tajunkemail1:string="";

 tajunkpname2:string="";
 tajunkdept2:string="";
 tajunkcontact2:number;
 tajunkemail2:string="";
    constructor(public eventservice:EventService,private router: Router) {
      
    }
    ngOnInit() {

    }


  addEvent(){
          this.eventservice.addEvent(this.model)
          .subscribe(Event =>{
          
          });         
   return true;
  }
  check(){
 if(this.newclg=="") {alert("Enter Your college name");return;}
    
                    if(this.junkc){
                     
                      if(this.newclg=="" || this.junkpname1=="" ||  this.junkdept1=="" || this.junkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.junkpname2=="" ||  this.junkdept2=="" || this.junkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var junkevent = new Event();
                    junkevent.event="geekjunk"
                     junkevent.clgname=this.newclg;
                    junkevent.pname1=this.junkpname1;
                    junkevent.contact1=this.junkcontact1;
                    junkevent.dept1=this.junkdept1;
                    junkevent.email1=this.junkemail1;

                    junkevent.pname2=this.junkpname2;
                    junkevent.contact2=this.junkcontact2;
                    junkevent.dept2=this.junkdept2;
                    junkevent.email2=this.junkemail2;

                              this.eventservice.addEvent(junkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                              }

     //trixc
                              if(this.trixc){
                     
                      if(this.newclg=="" || this.tjunkpname1=="" ||  this.tjunkdept1=="" || this.tjunkemail1=="")
                        {alert("Please Fill All the Fields");return;}
                         if(this.tjunkpname2==""  || this.tjunkdept2=="" || this.tjunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}
                       
                    var tjunkevent = new Event();
                    tjunkevent.event="geektrix"
                     tjunkevent.clgname=this.newclg;
                    tjunkevent.pname1=this.tjunkpname1;
                    tjunkevent.contact1=this.tjunkcontact1;
                    tjunkevent.dept1=this.tjunkdept1;
                    tjunkevent.email1=this.tjunkemail1;

                   tjunkevent.pname2=this.tjunkpname2;
                    tjunkevent.contact2=this.tjunkcontact2;
                    tjunkevent.dept2=this.tjunkdept2;
                    tjunkevent.email2=this.tjunkemail2;

                              this.eventservice.addEvent(tjunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                            }
  //facec
  if(this.facec){
                     
                      if(this.newclg=="" || this.fjunkpname1=="" ||this.fjunkdept1=="" || this.fjunkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.fjunkpname2==""  || this.fjunkdept2=="" || this.fjunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var fjunkevent = new Event();
                    fjunkevent.event="geekface"
                     fjunkevent.clgname=this.newclg;
                    fjunkevent.pname1=this.fjunkpname1;
                    fjunkevent.contact1=this.fjunkcontact1;
                    fjunkevent.dept1=this.fjunkdept1;
                   fjunkevent.email1=this.fjunkemail1;

                    fjunkevent.pname2=this.fjunkpname2;
                    fjunkevent.contact2=this.fjunkcontact2;
                    fjunkevent.dept2=this.fjunkdept2;
                    fjunkevent.email2=this.fjunkemail2;

                              this.eventservice.addEvent(fjunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                              }
//add
if(this.geekadzc){
                     
                      if(this.newclg=="" || this.ajunkpname1=="" ||  this.ajunkdept1=="" || this.ajunkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.ajunkpname2==""  ||  this.ajunkdept2=="" || this.ajunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var ajunkevent = new Event();
                    ajunkevent.event="geekadz"
                     ajunkevent.clgname=this.newclg;
                    ajunkevent.pname1=this.ajunkpname1;
                    ajunkevent.contact1=this.ajunkcontact1;
                    ajunkevent.dept1=this.ajunkdept1;
                    ajunkevent.email1=this.ajunkemail1;

                    ajunkevent.pname2=this.ajunkpname2;
                    ajunkevent.contact2=this.ajunkcontact2;
                    ajunkevent.dept2=this.ajunkdept2;
                    ajunkevent.email2=this.ajunkemail2;

                              this.eventservice.addEvent(ajunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                            }
//zorro        
                    if(this.zorroc){
                     
                      if(this.newclg=="" || this.zjunkpname1==""  || this.zjunkdept1=="" || this.zjunkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.zjunkpname2=="" ||this.zjunkdept2=="" || this.zjunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var zjunkevent = new Event();
                    zjunkevent.event="geekzorro"
                     zjunkevent.clgname=this.newclg;
                    zjunkevent.pname1=this.zjunkpname1;
                    zjunkevent.contact1=this.zjunkcontact1;
                    zjunkevent.dept1=this.zjunkdept1;
                    zjunkevent.email1=this.zjunkemail1;

                    zjunkevent.pname2=this.zjunkpname2;
                    zjunkevent.contact2=this.zjunkcontact2;
                    zjunkevent.dept2=this.zjunkdept2;
                    zjunkevent.email2=this.zjunkemail2;

                              this.eventservice.addEvent(zjunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                              }

//Quiz
if(this.quizc){
                     
                      if(this.newclg=="" || this.qjunkpname1=="" || this.qjunkdept1=="" || this.qjunkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.qjunkpname2==""  ||  this.qjunkdept2=="" || this.qjunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var qjunkevent = new Event();
                    qjunkevent.event="geekquiz"
                     qjunkevent.clgname=this.newclg;
                    qjunkevent.pname1=this.qjunkpname1;
                    qjunkevent.contact1=this.qjunkcontact1;
                    qjunkevent.dept1=this.qjunkdept1;
                    qjunkevent.email1=this.qjunkemail1;

                    qjunkevent.pname2=this.qjunkpname2;
                    qjunkevent.contact2=this.qjunkcontact2;
                    qjunkevent.dept2=this.qjunkdept2;
                    qjunkevent.email2=this.qjunkemail2;

                              this.eventservice.addEvent(qjunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                            }
//Mesh
if(this.meshc){
                     
                      if(this.newclg=="" || this.mjunkpname1=="" ||  this.mjunkdept1=="" || this.mjunkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.mjunkpname2==""  ||this.mjunkdept2=="" || this.mjunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var mjunkevent = new Event();
                    mjunkevent.event="geekmesh"
                     mjunkevent.clgname=this.newclg;
                    mjunkevent.pname1=this.mjunkpname1;
                    mjunkevent.contact1=this.mjunkcontact1;
                    mjunkevent.dept1=this.mjunkdept1;
                    mjunkevent.email1=this.mjunkemail1;

                    mjunkevent.pname2=this.mjunkpname2;
                    mjunkevent.contact2=this.mjunkcontact2;
                    mjunkevent.dept2=this.mjunkdept2;
                    mjunkevent.email2=this.mjunkemail2;

                              this.eventservice.addEvent(mjunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                            }
                            
//tango
if(this.tangoc){
                     
                      if(this.newclg=="" || this.tajunkpname1=="" ||  this.tajunkdept1=="" || this.tajunkemail1=="")
                        {alert("Please Fill All the Fields"); return;}
                         if(this.tajunkpname2=="" ||  this.tajunkdept2=="" || this.tajunkemail2=="")
                        {alert("Please Fill All the Fields"); return;}

                    var tajunkevent = new Event();
                tajunkevent.event="geektango"
                     tajunkevent.clgname=this.newclg;
                    tajunkevent.pname1=this.tajunkpname1;
                    tajunkevent.contact1=this.tajunkcontact1;
                    tajunkevent.dept1=this.tajunkdept1;
                    tajunkevent.email1=this.tajunkemail1;

                    tajunkevent.pname2=this.tajunkpname2;
                    tajunkevent.contact2=this.tajunkcontact2;
                    tajunkevent.dept2=this.tajunkdept2;
                    tajunkevent.email2=this.tajunkemail2;

                              this.eventservice.addEvent(tajunkevent)
                              .subscribe(res =>{
                             
                               }); 
                               // alert("Successfully Register");
                              //  window.location.reload();
                                
                              }
  alert("Successfully Register");
    this.reset();
 //window.location.reload();


  }
  changeShape(shape){
  if(shape.value=="Others") {this.other=true;this.newclg="";}
  else {this.other=false;this.newclg=shape.value;}
}
  
reset(){
  this.other=false;
  this.newclg="";

 this.junkc=false;
 this.trixc=false;
 this.facec=false;
 this.geekadzc=false;
 this.zorroc=false;
 this.quizc=false;
 this.meshc=false;
 this.tangoc=false;
 //junk
 this.junkpname1="";
 this.junkdept1="";
 this.junkcontact1=null;
 this.junkemail1="";

this.junkpname2="";
 this.junkdept2="";
 this.junkcontact2=null;
 this.junkemail2="";
//trix
 this.tjunkpname1="";
 this.tjunkdept1="";
 this.tjunkcontact1=null;
 this.tjunkemail1="";

 this.tjunkpname2="";
 this.tjunkdept2="";
 this.tjunkcontact2=null;
 this.tjunkemail2="";
//face
this.fjunkpname1="";
 this.fjunkdept1="";
 this.fjunkcontact1=null;
this.fjunkemail1="";

 this.fjunkpname2="";
this.fjunkdept2="";
this.fjunkcontact2=null;
this.fjunkemail2="";
//adv
this.ajunkpname1="";
 this.ajunkdept1="";
 this.ajunkcontact1=null;
 this.ajunkemail1="";

 this.ajunkpname2="";
 this.ajunkdept2="";
 this.ajunkcontact2=null;
 this.ajunkemail2="";
 //zorro
 this.zjunkpname1="";
 this.zjunkdept1="";
 this.zjunkcontact1=null;
 this.zjunkemail1="";

 this.zjunkpname2="";
this.zjunkdept2="";
 this.zjunkcontact2=null;
 this.zjunkemail2="";
 //Quicz
 this.qjunkpname1="";
 this.qjunkdept1="";
this.qjunkcontact1=null;
 this.qjunkemail1="";

 this.qjunkpname2="";
  this.qjunkdept2="";
 this.qjunkcontact2=null;
 this.qjunkemail2="";
 //mesh
 this.mjunkpname1="";
 this.mjunkdept1="";
 this.mjunkcontact1=null;
 this.mjunkemail1="";

 this.mjunkpname2="";
 this.mjunkdept2="";
 this.mjunkcontact2=null;
 this.mjunkemail2="";
//Tango
this.tajunkpname1="";
this.tajunkdept1="";
 this.tajunkcontact1=null;
this.tajunkemail1="";

 this.tajunkpname2="";
 this.tajunkdept2="";
 this.tajunkcontact2=null;
 this.tajunkemail2="";
 this.defaultValue='0'; 
}
}
