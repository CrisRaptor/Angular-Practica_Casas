import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [
    CommonModule,
    ReactiveFormsModule],
  template: `
    <form [formGroup]="registro" (submit)="registrar()">
      <div>
        <label for="name">Nombre</label>
        <input id="name" type="text" placeholder="Nombre" formControlName="name">
      </div>
      <div>
        <label for="surname">Apellidos</label>
        <input id="surname" type="text" placeholder="Apellidos" formControlName="surname">
      </div>
      <div>
        <label for="age">Edad</label>
        <input id="age" type="number" formControlName="age">
      </div>
      <div> 
        <label for="email">Correo Electrónico</label>
        <input id="email" type="email" formControlName="email">
      </div>
      <div>
        <input id="agree" type="checkbox" formControlName="agreeCheckbox">
        <label for="agree">Acepto las condiciones</label>
      </div>
     
      
      <button class="primary" type="submit" [disabled]="!registro.value.agreeCheckbox">Registrarse</button >
  </form>`
  ,
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registro = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    agreeCheckbox: new FormControl(''),
  });

  registrar(){
    if((this.registro.value.name ?? "").length < 8){

    } else if ((this.registro.value.surname ?? "").length < 8) {

    } else if (!(this.registro.value.agreeCheckbox ?? false)) {

    } else {

    }
  }
}
