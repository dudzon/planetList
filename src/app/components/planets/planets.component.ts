import { Component, OnInit } from "@angular/core";
import { Planet } from "./../../../models/Planet";
import { PlanetService } from "./../../services/planet.service";

import { Subscriber } from "rxjs";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  public planets: Planet[];
  constructor(private planetService: PlanetService) {}

  //  Fetch planets and display them on screen

  getPlanets(): void {
    this.planetService.getPlanets().subscribe(res => {
      this.planets = [
        ...res[0].results,
        ...res[1].results,
        ...res[2].results,
        ...res[3].results,
        ...res[4].results,
        ...res[5].results,
        ...res[6].results
      ];
    });
  }

  ngOnInit() {
    this.getPlanets();
  }
}
