import { AfterViewChecked, Component, effect, input, Input, OnInit } from '@angular/core';
import { Api, User } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dibujar-api',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './dibujar-api.html',
  styleUrl: './dibujar-api.scss'
})
export class DibujarApi implements OnInit,AfterViewChecked {
    // @Input() scheduleByDay!: string ;
     scheduleByDay = input.required<string>()
     
  days: string[] = [];
  timeSlots: string[] = [];

  users: User[] = [];
  cartoonScheduleByDay : any;
  jetixScheduleByDay: any;
  nickScheduleByDay : any;
  disneyScheduleByDay: any;
  etcScheduleByDay: any;
  // scheduleByDay: Record<string, Record<string, string[]>> = {};
selectedTime: Date = new Date();

  constructor(private _api : Api){
this.cartoonScheduleByDay = {
  lunesJueves: {
    "00:00": ["Dragon Ball Z"],
    "00:30": ["Ben 10"],
    "01:00": ["Adult Swim"],
    "01:30": ["Inuyasha"],
    "02:00": ["Naruto"],
    "02:30": ["Pokémon: Fuerza Máxima"],
    "03:00": ["Pokémon: Batalla de la Frontera"],
    "03:30": ["Pokémon: Batalla Avanzada"],
    "04:00": ["Pokémon: ¡Atrápalos Ya!"],
    "04:30": ["Pokémon: Diamante y Perla"],
    "05:00": ["Pokémon: Diamante y Perla"],
    "05:30": ["Pokémon: Diamante y Perla"],
    "06:00": ["Ed, Edd y Eddy"],
    "06:30": ["Las sombrías aventuras de Billy y Mandy"],
    "07:00": ["Las chicas superpoderosas"],
    "07:30": ["Tom y Jerry"],
    "08:00": ["Mansión Foster para amigos imaginarios"],
    "08:30": ["Mansión Foster para amigos imaginarios"],
    "09:00": ["Cartoon Cartoons"],
    "09:30": ["¿Qué hay de nuevo, Scooby-Doo?"],
    "10:00": ["Hi Hi Puffy AmiYumi"],
    "10:30": ["Bratz"],
    "11:00": ["Las chicas superpoderosas"],
    "11:30": ["KND: Los chicos del barrio"],
    "12:00": ["Ser Ian"],
    "12:30": ["Las sombrías aventuras de Billy y Mandy"],
    "13:00": ["Los jóvenes titanes"],
    "13:30": ["¿Qué hay de nuevo, Scooby-Doo?"],
    "14:00": ["Ben 10"],
    "14:30": ["Robotboy"],
    "15:00": ["Pokémon: Batalla avanzada"],
    "15:30": ["Vida y obra de Juniper Lee"],
    "16:00": ["KND: Los chicos del barrio"],
    "16:30": ["Mansión Foster para amigos imaginarios"],
    "17:00": ["Ed, Edd y Eddy"],
    "17:30": ["Duelo Xiaolin"],
    "18:00": ["Ben 10"],
    "18:30": ["Robotboy"],
    "19:00": ["KND: Los chicos del barrio"],
    "19:30": ["Duelo Xiaolin"],
    "20:00": ["Ed, Edd y Eddy"],
    "20:30": ["Las sombrías aventuras de Billy y Mandy"],
    "21:00": ["Tom y Jerry"],
    "21:30": ["¿Qué hay de nuevo, Scooby-Doo?"],
    "22:00": ["Pokémon: Batalla avanzada"],
    "22:30": ["Naruto"],
    "23:00": ["Zatch Bell"],
    "23:30": ["One Piece"]
  },
  viernesDomingo: {
    // Madrugada: animes y series adolescentes
    "00:00": ["Dragon Ball Z"],
    "00:30": ["Dragon Ball Z"],
    "01:00": ["Naruto"],
    "01:30": ["Naruto"],
    "02:00": ["One Piece"],
    "02:30": ["One Piece"],
    "03:00": ["Samurai Champloo"],
    "03:30": ["Samurai Champloo"],
    "04:00": ["Inuyasha"],
    "04:30": ["Inuyasha"],
    "05:00": ["Shaman King"],
    "05:30": ["Shaman King"],

    // Mañana: bloques infantiles
    "06:00": ["Ben 10"],
    "06:30": ["Ben 10"],
    "07:00": ["Los Padrinos Mágicos"],
    "07:30": ["Los Padrinos Mágicos"],
    "08:00": ["Foster, la casa de los amigos imaginarios"],
    "08:30": ["Foster, la casa de los amigos imaginarios"],
    "09:00": ["Las Supernenas"],
    "09:30": ["Las Supernenas"],
    "10:00": ["Código: KND (Kids Next Door)"],
    "10:30": ["Código: KND (Kids Next Door)"],
    "11:00": ["El Laboratorio de Dexter"],
    "11:30": ["El Laboratorio de Dexter"],

    // Mediodía: series y shows especiales
    "12:00": ["¡Oye, Arnold!"],
    "12:30": ["¡Oye, Arnold!"],
    "13:00": ["Ed, Edd y Eddy"],
    "13:30": ["Ed, Edd y Eddy"],
    "14:00": ["Johnny Bravo"],
    "14:30": ["Johnny Bravo"],
    "15:00": ["Coraje, el perro cobarde"],
    "15:30": ["Coraje, el perro cobarde"],

    // Tarde: animación variada
    "16:00": ["Powerpuff Girls Z"],
    "16:30": ["Powerpuff Girls Z"],
    "17:00": ["Teen Titans"],
    "17:30": ["Teen Titans"],
    "18:00": ["Ben 10: Fuerza Alienígena"],
    "18:30": ["Ben 10: Fuerza Alienígena"],
    "19:00": ["Samurai Jack"],
    "19:30": ["Samurai Jack"],

    // Noche: series clásicas y animes
    "20:00": ["Dragon Ball GT"],
    "20:30": ["Dragon Ball GT"],
    "21:00": ["Naruto Shippuden"],
    "21:30": ["Naruto Shippuden"],
    "22:00": ["One Piece"],
    "22:30": ["One Piece"],
    "23:00": ["Inuyasha"],
    "23:30": ["Inuyasha"]
  }
  
};
this.jetixScheduleByDay = {
    lunesViernes: {
    // Madrugada
    "00:00": ["Dino Rey"],
    "00:30": ["Isla de Mutantes"],
    "01:00": ["Pucca"],
    "01:30": ["Los Padrinos Mágicos"],
    "02:00": ["Los Padrinos Mágicos"],
    "02:30": ["Dave el Bárbaro"],
    "03:00": ["George de la Selva"],
    "03:30": ["Las Tortugas Ninja: Regreso a la Alcantarilla"],
    "04:00": ["Power Rangers: Operación Sobrecarga"],
    "04:30": ["Power Rangers: Furia Animal"],
    "05:00": ["Power Rangers: Fuerza Mística"],
    "05:30": ["Power Rangers: Fuerza Mística"],

    // Mañana
    "06:00": ["Los Padrinos Mágicos"],
    "06:30": ["Los Padrinos Mágicos"],
    "07:00": ["Pucca"],
    "07:30": ["Pucca"],
    "08:00": ["Combo Niños"],
    "08:30": ["Combo Niños"],
    "09:00": ["Animaniacs"],
    "09:30": ["Animaniacs"],
    "10:00": ["Rocket y Groot"],
    "10:30": ["Rocket y Groot"],
    "11:00": ["Mi Familia Mágica"],
    "11:30": ["Mi Familia Mágica"],

    // Mediodía
    "12:00": ["El Pájaro Loco"],
    "12:30": ["El Pájaro Loco"],
    "13:00": ["PINY: Instituto de Nueva York"],
    "13:30": ["PINY: Instituto de Nueva York"],
    "14:00": ["El Show Secreto"],
    "14:30": ["El Show Secreto"],
    "15:00": ["Gargoyles"],
    "15:30": ["Gargoyles"],

    // Tarde
    "16:00": ["George de la Selva"],
    "16:30": ["George de la Selva"],
    "17:00": ["Los Padrinos Mágicos"],
    "17:30": ["Los Padrinos Mágicos"],
    "18:00": ["Yin Yang Yo!"],
    "18:30": ["Yin Yang Yo!"],
    "19:00": ["Grotescología"],
    "19:30": ["Grotescología"],

    // Noche
    "20:00": ["Chaotic"],
    "20:30": ["Chaotic"],
    "21:00": ["Spider Riders"],
    "21:30": ["Spider Riders"],
    "22:00": ["Club Caza Monstruos"],
    "22:30": ["Club Caza Monstruos"],
    "23:00": ["Kamp Koral: Los Primeros Años de Bob Esponja"],
    "23:30": ["Kamp Koral: Los Primeros Años de Bob Esponja"]
  },


  viernes: {
    "06:00": ["Kirby"],
    "06:30": ["Transformers Cybertron"],
    "07:00": ["B-Daman"],
    "07:30": ["Digimon"],
    "08:00": ["Power Rangers Fuerza Salvaje"],
    "08:30": ["Power Rangers Dino Trueno"],
    "09:00": ["Power Rangers S.P.D."],
    "09:30": ["Teamo Supremo"],
    "10:00": ["Las Tortugas Ninja"],
    "10:30": ["Dave, el Bárbaro"],
    "11:00": ["Tres Espías Sin Límite"],
    "11:30": ["W.I.T.C.H."],
    "12:00": ["Dragon Booster"],
    "12:30": ["Code Lyoko"],
    "13:00": ["Los Padrinos Mágicos"],
    "13:30": ["Los Padrinos Mágicos"],
    "14:00": ["Generación Power Rangers"],
    "15:00": ["Sonic X"],
    "15:30": ["Power Rangers Fuerza Salvaje"],
    "16:00": ["Power Rangers Dino Trueno"],
    "16:30": ["Power Rangers S.P.D."],
    "17:00": ["Get Ed"],
    "17:30": ["Ciber Monos Hiperfuerza ¡Ya!"],
    "18:00": ["Dave, el Bárbaro"],
    "18:30": ["Academia de Titanes"],
    "19:00": ["Los Padrinos Mágicos"],
    "19:30": ["Los Padrinos Mágicos"],
    "20:00": ["Power Rangers Fuerza Salvaje"],
    "20:30": ["Power Rangers Dino Trueno"],
    "21:00": ["Power Rangers S.P.D."],
    "21:30": ["Get Ed"],
    "22:00": ["Súper Escuadrón Ciber Monos Hiperfuerza ¡Ya!"],
    "22:30": ["Los Padrinos Mágicos"],
    "23:00": ["Los Padrinos Mágicos"],
    "23:30": ["Dave, el Bárbaro"],
    "00:00": ["Generación Power Rangers"],
    "01:00": ["Digimon"],
    "01:30": ["Sonic X"],
    "02:00": ["Code Lyoko"],
    "02:30": ["Súper Escuadrón Ciber Monos Hiperfuerza ¡Ya!"],
    "03:00": ["Sonic X"],
    "03:30": ["Power Rangers Fuerza Salvaje"],
    "04:00": ["Power Rangers Dino Trueno"],
    "04:30": ["Power Rangers Dino Trueno"],
    "05:00": ["Power Rangers S.P.D."],
    "05:30": ["Súper Escuadrón Ciber Monos Hiperfuerza ¡Ya!"]
  },
  sabado: {
    "06:00": ["Generación Power Rangers"],
    "06:30": ["Generación Power Rangers"],
    "07:00": ["Power Rangers S.P.D."],
    "07:30": ["Power Rangers S.P.D."],
    "08:00": ["Súper Escuadrón Ciber Monos Hiperfuerza ¡Ya!"],
    "08:30": ["Súper Escuadrón Ciber Monos Hiperfuerza ¡Ya! (Repetición)"],
    "09:00": ["Las Tortugas Ninja"],
    "09:30": ["Transformers Cybertron"],
    "10:00": ["Digimon"],
    "10:30": ["Sonic X"],
    "11:00": ["Code Lyoko"],
    "11:30": ["Dragon Booster"],
    "12:00": ["W.I.T.C.H."],
    "12:30": ["Tres Espías Sin Límite"],
    "13:00": ["Dave, el Bárbaro"],
    "13:30": ["Academia de Titanes"],
    "14:00": ["Get Ed"],
    "14:30": ["Teamo Supremo"],
    "15:00": ["Los Padrinos Mágicos"],
    "15:30": ["Los Padrinos Mágicos"],
    "16:00": ["Power Rangers Fuerza Salvaje"],
    "16:30": ["Power Rangers Dino Trueno"],
    "17:00": ["Power Rangers S.P.D."],
    "17:30": ["Generación Power Rangers"]
  }
  
};
this.nickScheduleByDay = {
  lunesViernes: {
    "07:00": ["Rocket Power"],
    "07:30": ["Oye Arnold"],
    "08:00": ["Ciudad Mágica"],
    "08:30": ["Rugrats"],
    "09:00": ["Mascotas Maravilla"],
    "09:30": ["Los Disfraces de Doguie"],
    "10:00": ["Las Pistas de Blue"],
    "10:30": ["El Cuarto de Blue"],
    "11:00": ["Dora, La Exploradora"],
    "11:30": ["Go Diego Go"],
    "12:00": ["Zona Tiza"],
    "12:30": ["Bob Esponja"],
    "13:00": ["Las Aventuras de Jimmy Neutr"],
    "13:30": ["Las Aventuras de Jimmy Neutr"],
    "14:00": ["La Robot Adolescente"],
    "14:30": ["Nick Max"],
    "15:30": ["Lola & Virginia"],
    "16:00": ["Los Rugrats Crecidos"],
    "16:30": ["Catscratch"],
    "17:00": ["Las Aventuras de Jimmy Neutr"],
    "17:30": ["Avatar La Leyenda de Aang"],
    "18:00": ["Los X ", "Skyland", "Los Padrinos Mágicos"],
    "18:30": ["Bob Esponja"],
    "19:00": ["Danny Phantom"],
    "19:30": ["Zoey 101"],
    "20:00": ["Manual de Sobrevivencia Escolar de Ned"],
    "20:30": ["Drake & Josh (Lunes, Miércoles, Jueves y Viernes)", "Skimo (Martes)"],
    "21:00": ["Yu-Gi-Oh GX"],
    "21:30": ["Yu-Gi-Oh"],
    "22:00": ["Alf"],
    "22:30": ["Mork & Mindy"],
    "23:00": ["Los Locos Addams"],
    "23:30": ["Los Munsters"],
    "00:00": ["Hechizada"],
    "00:30": ["Mi Bella Genio"],
    "01:00": ["Ay! Como Duele Crecer"],
    "01:30": ["Dos Perfectos Desconocidos"],
    "02:00": ["Alf"],
    "02:30": ["Mork & Mindy"],
    "03:00": ["Los Locos Addams"],
    "03:30": ["Los Munsters"],
    "04:00": ["Hechizada"],
    "04:30": ["Mi Bella Genio"],
    "05:00": ["Ay! Como Duele Crecer"],
    "05:30": ["Dos Perfectos Desconocidos"],
    "06:00": ["Yu-Gi-Oh GX"],
    "06:30": ["Yu-Gi-Oh"]
  },
  sabadoDomingo: {
    "07:00": ["Zona Tiza"],
    "07:30": ["Ginger"],
    "08:00": ["Trollz"],
    "08:30": ["La Robot Adolescente"],
    "09:00": ["Los Rugrats Crecidos"],
    "09:30": ["Bob Esponja"],
    "10:00": ["Los Padrinos Mágicos"],
    "10:30": ["Catscratch"],
    "11:00": ["Los X"],
    "11:30": ["Skimo"],
    "12:00": ["Manual de Sobrevivencia Escolar de Ned"],
    "12:30": ["Danny Phantom"],
    "13:00": ["Las Aventuras de Jimmy Neutr"],
    "13:30": ["Yu-Gi-Oh GX (Sábados)", "Skyland (Domingos)"],
    "14:00": ["Yu-Gi-Oh"],
    "14:30": ["Manual de Sobrevivencia Escolar de Ned"],
    "15:00": ["Manual de Sobrevivencia Escolar de Ned"],
    "15:30": ["Drake & Josh"],
    "16:00": ["Drake & Josh"],
    "16:30": ["Súper Natural"],
    "17:00": ["Súper Natural"],
    "17:30": ["NickCine"],
    "19:30": ["Yu-Gi-Oh"],
    "20:00": ["Yu-Gi-Oh GX"],
    "20:30": ["Avata La Leyenda de Aang"],
    "21:00": ["Danny Phantom"],
    "21:30": ["Bob Esponja"],
    "22:00": ["Alf"],
    "22:30": ["Blanco & Negro"],
    "23:00": ["Los Hechos de La Vida"],
    "23:30": ["Ay! Como Duele Crecer"],
    "00:00": ["Los Munsters"],
    "00:30": ["Mork & Mindy"],
    "01:00": ["Hechizada"],
    "01:30": ["Mi Bella Genio"],
    "02:00": ["Alf"],
    "02:30": ["Blanco & Negro"],
    "03:00": ["Los Hechos de La Vida"],
    "03:30": ["Ay! Como Duele Crecer"],
    "04:00": ["Los Munsters"],
    "04:30": ["Mork & Mindy"],
    "05:00": ["Hechizada"],
    "05:30": ["Mi Bella Genio"],
    "06:00": ["Rocket Power"],
    "06:30": ["Oye Arnold"]
  }
  
};
this.disneyScheduleByDay = {
lunesJueves: {
    "00:00": ["Phil del Futuro"],
    "00:30": ["Kim Possible"],
    "01:00": ["La Familia Proud"],
    "01:30": ["Sister, Sister"],
    "02:00": ["Boy Meets World"],
    "02:30": ["La Vida con Zack y Cody"],
    "03:00": ["Life with Derek"],
    "03:30": ["Brandy y Mr. Whiskers"],
    "04:00": ["Lilo & Stitch: La Serie"],
    "04:30": ["The Buzz on Maggie"],
    "05:00": ["Stanley"],
    "05:30": ["JoJo's Circus"],
    "06:00": ["Phil del Futuro"],
    "06:30": ["Kim Possible"],
    "07:00": ["La Familia Proud"],
    "07:30": ["Sister, Sister"],
    "08:00": ["Boy Meets World"],
    "08:30": ["La Vida con Zack y Cody"],
    "09:00": ["Life with Derek"],
    "09:30": ["Brandy y Mr. Whiskers"],
    "10:00": ["Lilo & Stitch: La Serie"],
    "10:30": ["The Buzz on Maggie"],
    "11:00": ["Stanley"],
    "11:30": ["JoJo's Circus"],
    "12:00": ["Phil del Futuro"],
    "12:30": ["Kim Possible"],
    "13:00": ["La Familia Proud"],
    "13:30": ["Sister, Sister"],
    "14:00": ["Boy Meets World"],
    "14:30": ["La Vida con Zack y Cody"],
    "15:00": ["Life with Derek"],
    "15:30": ["Brandy y Mr. Whiskers"],
    "16:00": ["Lilo & Stitch: La Serie"],
    "16:30": ["The Buzz on Maggie"],
    "17:00": ["Stanley"],
    "17:30": ["JoJo's Circus"],
    "18:00": ["Phil del Futuro"],
    "18:30": ["Kim Possible"],
    "19:00": ["La Familia Proud"],
    "19:30": ["Sister, Sister"],
    "20:00": ["Boy Meets World"],
    "20:30": ["La Vida con Zack y Cody"],
    "21:00": ["Life with Derek"],
    "21:30": ["Brandy y Mr. Whiskers"],
    "22:00": ["Lilo & Stitch: La Serie"],
    "22:30": ["The Buzz on Maggie"],
    "23:00": ["Stanley"],
    "23:30": ["JoJo's Circus"]
  },
  viernesDomingo: {
    "00:00": ["Hannah Montana"],
    "00:30": ["La Vida con Zack y Cody"],
    "01:00": ["Eso es Raven"],
    "01:30": ["Dragón Americano: Jake Long"],
    "02:00": ["Phil del Futuro"],
    "02:30": ["Kim Possible"],
    "03:00": ["La Familia Proud"],
    "03:30": ["Sister, Sister"],
    "04:00": ["Boy Meets World"],
    "04:30": ["Life with Derek"],
    "05:00": ["Brandy y Mr. Whiskers"],
    "05:30": ["Lilo & Stitch: La Serie"],
    "06:00": ["Hannah Montana"],
    "06:30": ["La Vida con Zack y Cody"],
    "07:00": ["Eso es Raven"],
    "07:30": ["Dragón Americano: Jake Long"],
    "08:00": ["Phil del Futuro"],
    "08:30": ["Kim Possible"],
    "09:00": ["La Familia Proud"],
    "09:30": ["Sister, Sister"],
    "10:00": ["Boy Meets World"],
    "10:30": ["Life with Derek"],
    "11:00": ["Brandy y Mr. Whiskers"],
    "11:30": ["Lilo & Stitch: La Serie"],
    "12:00": ["Hannah Montana"],
    "12:30": ["La Vida con Zack y Cody"],
    "13:00": ["Eso es Raven"],
    "13:30": ["Dragón Americano: Jake Long"],
    "14:00": ["Phil del Futuro"],
    "14:30": ["Kim Possible"],
    "15:00": ["La Familia Proud"],
    "15:30": ["Sister, Sister"],
    "16:00": ["Boy Meets World"],
    "16:30": ["Life with Derek"],
    "17:00": ["Brandy y Mr. Whiskers"],
    "17:30": ["Lilo & Stitch: La Serie"],
    "18:00": ["Hannah Montana"],
    "18:30": ["La Vida con Zack y Cody"],
    "19:00": ["Eso es Raven"],
    "19:30": ["Dragón Americano: Jake Long"],
    "20:00": ["Phil del Futuro"],
    "20:30": ["Kim Possible"],
    "21:00": ["La Familia Proud"],
    "21:30": ["Sister, Sister"],
    "22:00": ["Boy Meets World"],
    "22:30": ["Life with Derek"],
    "23:00": ["Brandy y Mr. Whiskers"],
    "23:30": ["Lilo & Stitch: La Serie"]
  }
};
this.etcScheduleByDay= {
    lunesViernes: {
    // Madrugada: animes y series juveniles
    "00:00": ["Dragon Ball Z"],
    "00:30": ["Dragon Ball Z"],
    "01:00": ["Naruto"],
    "01:30": ["Naruto"],
    "02:00": ["Slam Dunk"],
    "02:30": ["Slam Dunk"],
    "03:00": ["Detective Conan"],
    "03:30": ["Detective Conan"],
    "04:00": ["Saint Seiya"],
    "04:30": ["Saint Seiya"],
    "05:00": ["Sailor Moon"],
    "05:30": ["Sailor Moon"],

    // Mañana
    "06:00": ["Doraemon"],
    "06:30": ["Doraemon"],
    "07:00": ["Supercampeones"],
    "07:30": ["Supercampeones"],
    "08:00": ["Zenki"],
    "08:30": ["Zenki"],
    "09:00": ["Sally, la bruja"],
    "09:30": ["Sally, la bruja"],
    "10:00": ["Idaten Jump"],
    "10:30": ["Idaten Jump"],
    "11:00": ["One Piece"],
    "11:30": ["One Piece"],

    // Mediodía
    "12:00": ["Marmalade Boy"],
    "12:30": ["Marmalade Boy"],
    "13:00": ["Bubblegum Crisis Tokyo 2040"],
    "13:30": ["Bubblegum Crisis Tokyo 2040"],
    "14:00": ["El Príncipe del Tenis"],
    "14:30": ["El Príncipe del Tenis"],
    "15:00": ["Shaman King"],
    "15:30": ["Shaman King"],

    // Tarde
    "16:00": ["Battle B-Daman"],
    "16:30": ["Battle B-Daman"],
    "17:00": ["Escuela de Detectives"],
    "17:30": ["Escuela de Detectives"],
    "18:00": ["El Mundo Secreto de Alex Mack"],
    "18:30": ["El Mundo Secreto de Alex Mack"],
    "19:00": ["¿Le Temes a la Oscuridad?"],
    "19:30": ["¿Le Temes a la Oscuridad?"],

    // Noche
    "20:00": ["El Mundo de Bobby"],
    "20:30": ["El Mundo de Bobby"],
    "21:00": ["Doraemon"],
    "21:30": ["Doraemon"],
    "22:00": ["Dragon Ball Z"],
    "22:30": ["Dragon Ball Z"],
    "23:00": ["Naruto"],
    "23:30": ["Naruto"]
  },

  sabadoDomingo: {
    // Madrugada: animes clásicos
    "00:00": ["Dragon Ball Z"],
    "00:30": ["Dragon Ball Z"],
    "01:00": ["Naruto"],
    "01:30": ["Naruto"],
    "02:00": ["Saint Seiya"],
    "02:30": ["Saint Seiya"],
    "03:00": ["Slam Dunk"],
    "03:30": ["Slam Dunk"],
    "04:00": ["Detective Conan"],
    "04:30": ["Detective Conan"],
    "05:00": ["Sailor Moon"],
    "05:30": ["Sailor Moon"],

    // Mañana: programas infantiles
    "06:00": ["Doraemon"],
    "06:30": ["Doraemon"],
    "07:00": ["Supercampeones"],
    "07:30": ["Supercampeones"],
    "08:00": ["Zenki"],
    "08:30": ["Zenki"],
    "09:00": ["Sally, la bruja"],
    "09:30": ["Sally, la bruja"],
    "10:00": ["Idaten Jump"],
    "10:30": ["Idaten Jump"],
    "11:00": ["One Piece"],
    "11:30": ["One Piece"],

    // Mediodía: series especiales de fin de semana
    "12:00": ["Marmalade Boy"],
    "12:30": ["Marmalade Boy"],
    "13:00": ["Bubblegum Crisis Tokyo 2040"],
    "13:30": ["Bubblegum Crisis Tokyo 2040"],
    "14:00": ["El Príncipe del Tenis"],
    "14:30": ["El Príncipe del Tenis"],
    "15:00": ["Shaman King"],
    "15:30": ["Shaman King"],

    // Tarde: más contenido para niños
    "16:00": ["Battle B-Daman"],
    "16:30": ["Battle B-Daman"],
    "17:00": ["Escuela de Detectives"],
    "17:30": ["Escuela de Detectives"],
    "18:00": ["El Mundo Secreto de Alex Mack"],
    "18:30": ["El Mundo Secreto de Alex Mack"],
    "19:00": ["El Mundo de Bobby"],
    "19:30": ["El Mundo de Bobby"],

    // Noche: anime y series juveniles
    "20:00": ["Dragon Ball Z"],
    "20:30": ["Dragon Ball Z"],
    "21:00": ["Naruto"],
    "21:30": ["Naruto"],
    "22:00": ["Saint Seiya"],
    "22:30": ["Saint Seiya"],
    "23:00": ["Detective Conan"],
    "23:30": ["Detective Conan"]
  }
};

  const newCartoon = this.cartoonScheduleByDay
effect(() => {
  const scheduleMap: Record<string, any> = {
    CartoonNetwork: newCartoon,
    Jetix: this.jetixScheduleByDay,
    Nickelodeon: this.nickScheduleByDay,
    Disney: this.disneyScheduleByDay,
    Etc: this.etcScheduleByDay
  };

  const selectedSchedule = scheduleMap[this.scheduleByDay()];
  if (selectedSchedule) {
    this.setSchedule(selectedSchedule);
  }
});
  }
  activeRowElement?: HTMLElement;

    ngOnInit(): void {
      debugger
    setInterval(() => this.selectedTime = new Date(), 60000);
    console.log(this.scheduleByDay())
      this.setSchedule(this.nickScheduleByDay);

  }
     ngAfterViewChecked() {
    if (this.activeRowElement) {
      this.activeRowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.activeRowElement = undefined;
    }
  }
//  get timeSlots(): string[] {
//     const allTimes = new Set<string>();
//     Object.values(this.scheduleByDay).forEach(day => {
//       Object.keys(day).forEach(time => allTimes.add(time));
//     });
//     return Array.from(allTimes).sort();
//   }

//   get days(): string[] {
//     return Object.keys(this.scheduleByDay);
//   }


 setSchedule(schedule: Record<string, Record<string, string[]>>) {
 
  if(this.scheduleByDay()==="CartoonNetwork"){
   
    }

    this.cartoonScheduleByDay = schedule;

    // Extract days
    this.days = Object.keys(schedule);

    // Extract and sort all unique time slots
    const allTimes = new Set<string>();
    this.days.forEach(day => {
      Object.keys(schedule[day]).forEach(time => allTimes.add(time));
    });

    this.timeSlots = Array.from(allTimes).sort((a, b) => {
      const toMinutes = (t: string) => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
      };
      return toMinutes(a) - toMinutes(b);
    });
  }

  

 isActive(time: string): boolean {
  debugger

      if(parseInt(time.split(':')[0], 10) === this.selectedTime.getHours()) {

    return true
      }
      else{
        return false;
      }

  }

goToShow(show: string) {
  // Replace spaces with "+" for URL
  const encodedTitle = encodeURIComponent(show.toLowerCase());
  const url = `https://www.lacartoons.com/?utf8=%E2%9C%93&Titulo=${encodedTitle}`;
  
  // Open in new tab
  window.open(url, '_blank');
}
getChannelClass(show: string): string {
  const name = show.toLowerCase();
  if (name.includes('cartoon')) return 'cartoonnetwork';
  if (name.includes('jetix') || name.includes('power rangers')) return 'jetix';
  if (name.includes('disney')) return 'disney';
  if (name.includes('nickelodeon')) return 'nickelodeon';
  return 'default-channel'; // fallback
}
 setActiveRow(el: HTMLElement | null, time: string) {
    if (el && this.isActive(time)) {
      this.activeRowElement = el;
    }
  }
}
