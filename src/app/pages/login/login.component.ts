import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  ingresar() {
    this.mensaje = '';

    if (!this.usuario || !this.clave) {
      this.mensaje = 'Debe completar usuario y contraseña.';
      return;
    }

    if (this.usuario === 'estudiante' && this.clave === '1234') {
      this.router.navigate(['/inicio']);
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos.';
    }
  }
}