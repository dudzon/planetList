import { Component, OnInit, Input } from "@angular/core";
import { Planet } from "./../../../models/Planet";
import { ActivatedRoute } from "@angular/router";
import { PlanetService } from "./../../services/planet.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-planet-item",
  templateUrl: "./planet-item.component.html",
  styleUrls: ["./planet-item.component.scss"]
})
export class PlanetItemComponent implements OnInit {
  planet: Planet;
  // residents: any;

  // checkResidents() {
  //   if (!this.planet.residents) {
  //     this.residents = this.planet.residents.push("Nothing");
  //     console.log(this.residents);
  //   }

  //   return this.residents;
  // }

  // films: string[] = this.planet.films;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPlanet();
    // this.checkResidents();
  }

  //  Pass the name as id param and show the component with data

  getPlanet(): void {
    const name = this.route.snapshot.paramMap.get("id");
    this.planetService
      .getPlanet(name)
      .subscribe(planet => (this.planet = planet));
  }
  goBack(): void {
    this.location.back();
  }
}
