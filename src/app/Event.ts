export class Event{
    id:number;
    event:string;
    clgname:string;
    pname1: string;
    contact1:number;
    dept1:string;
    email1: string;

    pname2: string;
    contact2:number;
    dept2:string;
    email2: string;
    
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}