import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

  guardarInscripcion() {
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

    alert('Inscripción guardada correctamente');

    this.nombre = '';
    this.curso = '';
    this.jornada = '';
    this.email = '';
  }
}