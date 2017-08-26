import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegisterComponent } from './register.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import { UserComponent }  from './user.component';
import { ReportComponent }  from './report.component';
const appRouts: Routes=[
    {
        path:'',
        component: HomeComponent 
    }
    ,
     {
        path:'home',
        component: HomeComponent
    },
     {
        path:'register',
        component: RegisterComponent
    },
     {
        path:'login',
        component: UserComponent
    }
    ,
     {
        path:'report',
        component: ReportComponent
    }
 
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


