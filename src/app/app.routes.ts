import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ListaInscritosComponent } from './pages/lista-inscritos/lista-inscritos.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'lista', component: ListaInscritosComponent },
  { path: 'about', component: AboutComponent }
];