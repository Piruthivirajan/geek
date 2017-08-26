import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import {AppModule} from './app.module';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule ,FormBuilder, Validators,FormGroup } from '@angular/forms';

describe('AppComponent', () => {
 let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule,HttpModule],
      declarations: [ HomeComponent]
    })
    .compileComponents();
  
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 


});
