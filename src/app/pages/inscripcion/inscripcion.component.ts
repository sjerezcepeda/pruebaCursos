import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent {
  nombre: string = '';
  curso: string = '';
  jornada: string = '';
  email: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  tieneLetrasRepetidas(texto: string): boolean {
    return /(.)\1{4,}/.test(texto.trim());
  }

  guardarInscripcion() {
    this.mensajeError = '';

    if (this.nombre.trim().length < 3) {
      this.mensajeError = 'El nombre debe tener al menos 3 caracteres.';
      return;
    }

    if (this.tieneLetrasRepetidas(this.nombre)) {
      this.mensajeError = 'El nombre no puede tener muchas letras repetidas seguidas.';
      return;
    }

    const nuevaInscripcion = {
      nombre: this.nombre,
      curso: this.curso,
      jornada: this.jornada,
      email: this.email
    };

    const inscritosGuardados = localStorage.getItem('inscritos');
    const inscritos = inscritosGuardados ? JSON.parse(inscritosGuardados) : [];

    inscritos.push(nuevaInscripcion);

    localStorage.setItem('inscritos', JSON.stringify(inscritos));

    this.nombre = '';
    this.curso = '';
    this.jornada = '';
    this.email = '';

    this.router.navigate(['/lista']);
  }
}