import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  /*cambiarNombre(event: any) {
  console.log(event.target.value);
  }*/
  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
nuevo: Personaje = {
  nombre: 'Maestro Roshi',
  poder: 1000
};

agregarNuevoPersonaje( arg: Personaje ) {

  console.log( arg );
  this.personajes.push( arg );

}

  
}
