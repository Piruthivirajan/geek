import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RegisterComponent } from './register.component';
import {AppModule} from './app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule ,FormBuilder, Validators,FormGroup } from '@angular/forms';


describe('RegisterComponent', () => {
 let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule,HttpModule],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create RegisterComponent', () => {
    expect(component).toBeTruthy();
  }); 

   it('should Call AddEvent Method', () => {
    expect(component.addEvent()).toBe(true);
  });
  

}); 