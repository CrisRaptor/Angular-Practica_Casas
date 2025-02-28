import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HousingLocationComponent,
    RouterModule
  ],
  template: `
  <div id="registro">
    <a [routerLink]="['/registro']"><button class="primary" type="button">Registrarse</button ></a>
  </div>
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location 
      *ngFor="let housingLocation of filteredLocationList" 
      [housingLocation]="housingLocation">
    </app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
      this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
