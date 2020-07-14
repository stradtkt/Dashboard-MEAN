import { Routes } from '@angular/router';
import * as fromHome from './home/index';

export const appRoutes: Routes = [
    {path: '', component: fromHome.RegisterComponent},
    {path: 'login', component: fromHome.LoginComponent},
    {path: 'dashboard', component: fromHome.DashboardComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];