import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})


export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
 
  constructor( private dbzService: DbzService ) {}
  // Sirve para emitir eventos con el tipo de dato <Personaje>
  //@Output() OnNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

    //this.OnNuevoPersonaje.emit( this.nuevo ); //Podemos enviar nuevo, porque es de tipo Personaje
    this.dbzService.agregarPersonaje( this.nuevo );
    this.nuevo = { 
      nombre:'',
      poder: 0
    };
  }

 
}
