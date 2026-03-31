import { Component, signal } from '@angular/core';
import { ListaCanales } from './lista-canales/lista-canales';

@Component({
  selector: 'app-root',
  imports: [ListaCanales],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:true,
})
export class App {
  protected readonly title = signal('pryectoTest');
}
