import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {

  @Input() // para pasar información de padre (main-page) a hijo (personaje)
  personajes: any[] = [];
;}
