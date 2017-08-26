import { TestBed,async, inject } from '@angular/core/testing';
import { EventService } from './event.service';
import { MockBackend,MockConnection  } from '@angular/http/testing';
import { BaseRequestOptions, Http, XHRBackend, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockEvent} from './Event.data.mock';
import { tick, fakeAsync } from '@angular/core/testing';
import {Event} from './event';

describe('EventService', () => {
 
   let backend: MockBackend;
    let userserv: EventService;
      beforeEach(() => {
        TestBed.configureTestingModule({
         providers: [
          {
          provide: Http, useFactory: (backend, options) => {
          return new Http(backend, options);
        },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,     
         EventService]
    }); backend = TestBed.get(MockBackend);
    userserv=TestBed.get(EventService,null);
  });

      it('Should Create Event', inject([EventService, MockBackend], fakeAsync((userService: EventService, mockBackend: MockBackend) => {

           mockBackend.connections.subscribe(c => {
            c.mockRespond(new Response(new ResponseOptions({body: {"id": 1,"name":"raja","title":"raja" }}))); });
                     userService.addEvent(MockEvent).subscribe((response) => {
             expect(response.name).toBe('raja');
    }); })));

});