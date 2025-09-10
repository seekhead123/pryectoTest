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
  // scheduleByDay: Record<string, Record<string, string[]>> = {};
selectedTime: Date = new Date();

  constructor(private _api : Api){
this.cartoonScheduleByDay = {
  lunesJueves: {
    "06:00": ["Ed, Edd y Eddy"],
    "06:30": ["Las sombrías aventuras de Billy y Mandy"],
    "07:00": ["Las chicas superpoderosas"],
    "07:30": ["Tom y Jerry"],
    "08:00": ["Mansión Foster para amigos imaginarios"],
    "08:30": ["Mansión Foster para amigos imaginarios"],
    "09:00": ["Cartoon Cartoons"],
    "09:30": ["¿Qué hay de nuevo, Scooby-Doo?"],
    "10:00": ["HI Hi Puffy AmiYumi"],
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
    "22:30": ["Naruto (nuevo)"],
    "23:00": ["Zatch Bell"],
    "23:30": ["Viewtiful Joe"],
    "00:00": ["Dragon Ball Z Toonami '05"],
    "00:30": ["Locos Dieciséis"],
    "00:50": ["Samurai X Toonami '05"],
    "01:00": ["Adult Swim"],
    "01:10": ["Samurai Champloo Toonami '05"],
    "01:30": ["Ranma 1/2 Toonami '05"],
    "02:00": ["Los caballeros del zodiaco"],
    "02:30": ["One Piece"],
    "03:00": ["Pokémon: Los viajes Johto"],
    "03:45": ["Dalila y Julius"],
    "04:00": ["Fútbol callejero"],
    "04:30": ["Pinky y Cerebro"],
    "04:45": ["Bobo y Tonto"],
    "05:00": ["Hora ACME"],
    "05:30": ["Ed, Edd y Eddy"]
  },
  viernes: {
    "06:00": ["Hora ACME"],
    "06:30": ["Mirmo Zibang"],
    "07:00": ["Franklin"],
    "07:30": ["El campamento de Lazlo"],
    "08:00": ["Krypto, el superperro"],
    "08:30": ["Las chicas superpoderosas"],
    "09:00": ["Betty Toons"],
    "10:00": ["Mi compañero de clase es un mono"],
    "10:30": ["Mansión Foster para amigos imaginarios"],
    "11:00": ["KND: Los chicos del barrio"],
    "11:30": ["Robotboy"],
    "12:00": ["Loonatics"],
    "12:30": ["Duelo Xiaolin"],
    "13:30": ["Ben 10"],
    "14:00": ["Vida y obra de Juniper Lee"],
    "14:30": ["Pokémon"],
    "15:00": ["Mini-maratones"],
    "16:00": ["Duelo Xiaolin"],
    "16:30": ["Ben 10"],
    "17:00": ["Robotboy"],
    "17:30": ["Los jóvenes titanes"],
    "18:00": ["Mini-maratones"],
    "18:30": ["Mansión Foster para amigos imaginarios"],
    "19:00": ["Mi compañero de clase es un mono"],
    "19:30": ["Mansión Foster para amigos imaginarios"],
    "20:00": ["Teatro Cartoon"],
    "22:00": ["Duelo Xiaolin"],
    "22:30": ["Bugs Bunny y el Pato Lucas"],
    "23:00": ["Tom y Jerry"],
    "23:30": ["Las aventuras de Silvestre y Piolín"],
    "00:00": ["Soy la Comadreja"],
    "00:30": ["Los desastres del Rey Arturo (nuevo)"],
    "03:00": ["Adult Swim (repetición)"],
    "05:00": ["Bobo y Tonto"]
  },
  sabado: {
    "06:00": ["Taz-Manía"],
    "07:00": ["Krypto, el superperro"],
    "08:00": ["Mansión Foster para amigos imaginarios"],
    "09:00": [],
    "10:00": ["Mini-maratones"],
    "14:00": ["Teatro Cartoon"],
    "15:00": ["Votatoon"],
    "18:00": ["Mi compañero de clase es un mono"],
    "19:00": ["¿Qué hay de nuevo, Scooby-Doo?"],
    "19:30": ["Bratz"],
    "20:00": ["Teatro Cartoon (repetición)"],
    "22:00": ["Tom y Jerry"],
    "23:00": ["La vaca y el pollito"],
    "23:30": ["La vaca y el pollito"],
    "00:00": ["Johnny Bravo"],
    "00:30": ["Locos Dieciséis"]
  },
  domingo: {
    "23:30": ["Soy la Comadreja"]
  }
};
this.jetixScheduleByDay = {
  lunesJueves: {
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
    "24:00": ["Phil of the Future – Maybe-Sitting"],
    "24:30": ["Kim Possible – Clothes Minded"],
    "1:00": ["The Proud Family – Spelling Bee"],
    "1:30": ["Sister, Sister – Two for the Road"],
    "2:00": ["Boy Meets World – Seven the Hard Way"],
    "2:30": ["That's So Raven – Double Vision"],
    "3:00": ["My Big Fat Pizza Party"],
    "3:30": ["The Suite Life of Zack & Cody – Maddie Checks In"],
    "4:00": ["What the Hey"],
    "4:30": ["Brandy & Mr. Whiskers – Freaky Tuesday / The Brain of My Existence"],
    "5:00": ["Lilo & Stitch: The Series – Angel"],
    "5:30": ["The Buzz on Maggie – Metamorpho Sis / Radio Free Buzzdale"],
    "6:00": ["Stanley – Gorilla Sleepover / Sea Lion Slip-up (Playhouse Disney 2002)"],
    "6:30": ["JoJo's Circus – Goliath Gets a Boo-Boo / Join the Club (Playhouse Disney 2002)"],
    "7:00": ["The Wiggles – Astronaut Dance (Playhouse Disney 2002)"],
    "7:25": ["This Is Emily Yeung (Playhouse Disney 2002)"],
    "7:30": ["Higglytown Heroes – Don't Wayne on My Parade / Twinkle's Terrific Twirl (Playhouse Disney 2002)"],
    "7:55": ["Go Baby (Playhouse Disney 2002)"],
    "8:00": ["Little Einsteins – The Glass Slipper Ball (Playhouse Disney 2002)"],
    "8:30": ["Mickey Mouse Clubhouse – Sleeping Minnie (Playhouse Disney 2002)"],
    "8:55": ["Lou and Lou: Safety Patrol (Playhouse Disney 2002)"],
    "9:00": ["Handy Manny – Wonder Tool / Tool Games (Playhouse Disney 2002)"],
    "9:30": ["The Doodlebops – Show and Tell (Playhouse Disney 2002)"],
    "9:55": ["This Is Daniel Cook – Doing Gymnastics (Playhouse Disney 2002)"],
    "10:00": ["Charlie and Lola – Yes I Am, No You're Not / I Am Really, Really Really Concentrating (Playhouse Disney 2002)"],
    "10:30": ["The Koala Brothers – George the Sportsman / Ned's Shiny Balloon (Playhouse Disney 2002)"],
    "10:55": ["Shanna's Show – Farmer (Playhouse Disney 2002)"],
    "11:00": ["The Wiggles – Jack in the Box (Playhouse Disney 2002)"],
    "11:25": ["Dan Zanes House Party – Malti (Playhouse Disney 2002)"],
    "11:30": ["Higglytown Heroes – Kip's Sweet Tooth / Wayne's Lollipop (Playhouse Disney 2002)"],
    "12:00": ["Lilo & Stitch: The Series – Dupe"],
    "12:30": ["The Little Mermaid – Red"],
    "13:00": ["Timon & Pumbaa – Alcatraz-Mataz / Oahu Wahoo"],
    "13:30": ["Buzz Lightyear of Star Command – First Missions"],
    "14:00": ["Brandy & Mr. Whiskers – The Tell-Tale Shoes / Time for Waffles"],
    "14:30": ["The Proud Family – Forbidden Date"],
    "15:00": ["American Dragon: Jake Long – Haley Gone Wild"],
    "15:30": ["Kim Possible – Mad Dogs and Aliens"],
    "16:00": ["The Suite Life of Zack & Cody – Footloser"],
    "16:30": ["The Prince & the Plunger"],
    "17:00": ["Life with Derek – Dating Game"],
    "17:30": ["The Fall"],
    "18:00": ["Phil of the Future – Phil Without a Future"],
    "18:30": ["That's So Raven – Skunk'd"],
    "19:00": ["Phil of the Future – Versa Day"],
    "19:30": ["The Suite Life of Zack & Cody – Nugget of History"],
    "20:00": ["Smart House (1999) – DCOM"],
    "20:30": [],
    "21:00": [],
    "21:30": ["That's So Raven – Juicer Consequences"],
    "22:00": ["Life with Derek – Mice and Men"],
    "22:30": ["Phil of the Future – Pim-cipal"],
    "23:00": ["The Suite Life of Zack & Cody – Nugget of History"],
    "23:30": ["That's So Raven – Skunk'd"]
  }
};
  const newCartoon = this.cartoonScheduleByDay
effect(() => {
  const scheduleMap: Record<string, any> = {
    CartoonNetwork: newCartoon,
    Jetix: this.jetixScheduleByDay,
    Nickelodeon: this.nickScheduleByDay,
    Disney: this.disneyScheduleByDay
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
