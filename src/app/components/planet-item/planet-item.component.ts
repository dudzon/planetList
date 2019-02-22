import { Component, OnInit, Input } from "@angular/core";
import { Planet } from "./../../../models/Planet";
import { ActivatedRoute } from "@angular/router";
import { PlanetService } from "./../../services/planet.service";

@Component({
  selector: "app-planet-item",
  templateUrl: "./planet-item.component.html",
  styleUrls: ["./planet-item.component.scss"]
})
export class PlanetItemComponent implements OnInit {
  planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService
  ) {}

  ngOnInit() {
    this.getPlanet();
  }

  //  Pass the name as id param and show the component with data

  getPlanet(): void {
    const name = this.route.snapshot.paramMap.get("id");
    this.planetService
      .getPlanet(name)
      .subscribe(planet => (this.planet = planet));
  }
}
