// src/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PiezasComponent } from './app/piezas/piezas.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent},
  { path: 'piezas', component: PiezasComponent},
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

