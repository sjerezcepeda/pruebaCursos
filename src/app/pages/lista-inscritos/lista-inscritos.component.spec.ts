import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-lista-inscritos',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './lista-inscritos.component.html',
  styleUrl: './lista-inscritos.component.css'
})
export class ListaInscritosComponent implements OnInit {
  inscritos: any[] = [];

  ngOnInit(): void {
    this.inscritos = JSON.parse(localStorage.getItem('inscritos') || '[]');
  }
}