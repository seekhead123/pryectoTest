import { Component, signal } from '@angular/core';
import { DibujarApi } from '../dibujar/dibujar-api/dibujar-api';

@Component({
  selector: 'app-lista-canales',
  imports: [DibujarApi],
  templateUrl: './lista-canales.html',
  styleUrl: './lista-canales.scss'
})
export class ListaCanales {

  channelType = signal<string>('')

  enviarCanal( canal: string){
    
this.channelType.set(canal);
  }

}
