import { Routes } from '@angular/router';
import { PageHomeComponent } from './home/page-home/page-home.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",component:PageHomeComponent}
];
