import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  //@Input() // para pasar información de padre (main-page) a hijo (personaje)
  get personajes() {
    return this.dbzService.personajes;
  }
  
  constructor( private dbzService: DbzService ){

  }

;}
