import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanetsComponent } from "./components/planets/planets.component";
import { HeaderComponent } from "./components/header/header.component";
import { PlanetItemComponent } from "./components/planet-item/planet-item.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
  SPINNER
} from "ngx-ui-loader";
import { PlanetSearchComponent } from "./components/planet-search/planet-search.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.squareJellyBox
};
@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    HeaderComponent,
    PlanetItemComponent,
    PlanetSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
