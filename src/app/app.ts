import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';
import { DibujarApi } from './dibujar/dibujar-api/dibujar-api';
import { HttpClient } from '@angular/common/http';
import { ListaCanales } from './lista-canales/lista-canales';

@Component({
  selector: 'app-root',
  imports: [ListaCanales,DibujarApi],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:true,
})
export class App {
  protected readonly title = signal('pryectoTest');
}
