import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterModule
  ],
  template: `
    <main>
      <a [routerLink]="['/']" >
        <header id="top-bar" class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <section id="content" class="content">
        <!--<h1 *ngIf="username">Bienvenido, {{username}}!</h1>-->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'homes';
  //username: string;

  constructor() {
    //this.username = 'Guest';
  }
}
