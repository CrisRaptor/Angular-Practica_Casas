import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <form [formGroup]="registro" (submit)="registrar()">
      <div>
        <label for="name">Nombre</label>
        <input id="name" type="text" formControlName="name">
      </div>
      <div>
        <label for="surname">Apellidos</label>
        <input id="surname" type="text" formControlName="surname">
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
        <label for="agree">Acepto las condiciones</label>
        <input id="agree" type="checkbox" formControlName="agreeCheckbox">
      </div>
      <button class="primary" type="submit" [disabled]="!registro.valid">Registrarse</button >
  </form>`
  ,
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registro: FormGroup;
  @Output() eventoUsername = new EventEmitter<string>();
  //router: Router = new Router;

  constructor(private builder: FormBuilder) {
    this.registro = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*$')] ],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*$')] ],
      age: ['', [Validators.required, Validators.min(17), Validators.pattern('^[0-9]*$')] ],
      email: ['', [Validators.required, Validators.email]],
      agreeCheckbox: [false, [Validators.requiredTrue]]
    });
  }

  registrar(){
    console.log(this.registro.value);
    window.alert('Bienvenido, ' + this.registro.value.name + '!');
    //this.router.navigate(['/']);
  }
}
