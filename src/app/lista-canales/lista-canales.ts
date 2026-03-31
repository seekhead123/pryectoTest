import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DibujarApi } from '../dibujar/dibujar-api/dibujar-api';

@Component({
  selector: 'app-lista-canales',
  imports: [CommonModule, DibujarApi],
  templateUrl: './lista-canales.html',
  styleUrl: './lista-canales.scss'
})
export class ListaCanales {
  readonly channels = [
    { id: 'CartoonNetwork', name: 'Cartoon Network', accent: 'accent-cartoon', description: 'Clasicos, accion y bloques retro.' },
    { id: 'Nickelodeon', name: 'Nickelodeon', accent: 'accent-nick', description: 'Comedia, live action y series iconicas.' },
    { id: 'Disney', name: 'Disney Channel', accent: 'accent-disney', description: 'Series juveniles y animacion inolvidable.' },
    { id: 'Jetix', name: 'Jetix', accent: 'accent-jetix', description: 'Aventura, anime y Power Rangers.' },
    { id: 'Etc', name: 'Etcetera', accent: 'accent-etc', description: 'Anime, cultura pop y trasnoche legendaria.' }
  ];

  channelType = signal<string>('');

  enviarCanal(canal: string) {
    this.channelType.set(canal);
  }
}
