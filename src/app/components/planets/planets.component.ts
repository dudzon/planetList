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
  planets: Planet[];

  constructor(private planetService: PlanetService) {}

  //  Fetch planets and display them on screen

  getPlanets(): void {
    this.planetService
      .getPlanets()
      .subscribe(planets => (this.planets = planets));
  }
  ngOnInit() {
    this.getPlanets();
  }
}
