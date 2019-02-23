import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanetsComponent } from "./components/planets/planets.component";
import { HeaderComponent } from "./components/header/header.component";
import { PlanetItemComponent } from "./components/planet-item/planet-item.component";
import { HttpClientModule } from "@angular/common/http";
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
  SPINNER
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsType: SPINNER.squareJellyBox
};
@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    HeaderComponent,
    PlanetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
