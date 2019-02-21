import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HeaderComponent } from './components/header/header.component';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    HeaderComponent,
    PlanetItemComponent,
    PlanetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
