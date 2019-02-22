import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanetsComponent } from "./components/planets/planets.component";
import { PlanetItemComponent } from "./components/planet-item/planet-item.component";

const routes: Routes = [
  { path: "", component: PlanetsComponent },
  { path: "planet/:id", component: PlanetItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
