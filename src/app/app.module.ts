import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RegisterComponent} from './register.component';
import { AppComponent } from './app.component';
import { routing} from './app.routing';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { ReportComponent }  from './report.component';


@NgModule({
  declarations: [
    AppComponent,RegisterComponent,HomeComponent,UserComponent,ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
