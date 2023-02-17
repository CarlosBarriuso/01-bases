import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})


export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
 
  // Sirve para emitir eventos con el tipo de dato <Personaje>
  @Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    this.OnNuevoPersonaje.emit( this.nuevo ); //Podemos enviar nuevo, porque es de tipo Personaje

    this.nuevo = { 
      nombre:'',
      poder: 0
    };
  }

 
}
