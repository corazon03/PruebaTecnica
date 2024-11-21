import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import { ListadoComponent } from './listado/listado.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent },
    {path: 'libros', component: ListadoComponent}
];
