import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Event}  from './Event';
import { EventService} from './Event.service';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers: [EventService]
})
export class ReportComponent {

registers:Event;

    constructor(public eventservice:EventService,private router: Router) {
      
    }
    ngOnInit() {
            this.getDetails();
    }
    getDetails(){
      this.eventservice.getDetails().subscribe(reg =>{
         this.registers=reg;
       });
    }

 delete(value:any) {
 this.eventservice.removePart(value).subscribe(reg =>{      
       });
       this.getDetails();
       this.router.navigateByUrl('/report');
 }
 export(){

   
   var title="Geek";
    var head = "";
         head += '"User Id",';
         head += '"Event Name",';
         head += '"Collge Name",';
         head += '"Participator 1",';
         head += '"Contact No",';
         head += '"Department",';
         head += '"Email Id",';
         head += '"Participator 2",';
         head += '"Contact No",';
         head += '"Department",';
         head += '"Email Id",';
          head+='\r\n'
          var csvContent = "";
          csvContent=head;
    for(var i in this.registers){
      var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in this.registers[i]) {
            row += '"' + this.registers[i][index] + '",';
        }

        row.slice(0, row.length - 1);
        csvContent += row + '\r\n';
    }
        
        //add a line break after each row
       

  //create column_names here, sep by commas, append them to "csvContent", end with /n
  //create your data rows sep by commas & quoted, end with /n
  var filename = title.replace(/ /g,'')+'.csv'; //gen a filename using the title but getting rid of spaces
  var blob = new Blob([csvContent], { "type": 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) 
  { // IE 10+
    navigator.msSaveBlob(blob, filename);
  } 
  else //create a link and click it
  {
    var link = document.createElement("a");
    if (link.download !== undefined) // feature detection
    { 
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob); 
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
 }
}
