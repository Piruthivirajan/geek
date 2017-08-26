import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import {AppModule} from './app.module';
import { AppComponent} from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule ,FormBuilder, Validators,FormGroup } from '@angular/forms';

describe('AppComponent', () => {
 let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule,HttpModule],
      declarations: [ AppComponent]
    })
    .compileComponents();
  
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should be AppValue', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let c = fixture.componentInstance;
       expect(c.title).toBe('app works!'); });
  
});
