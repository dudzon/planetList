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
  /**
   * Represents a Planet List.
   * @param {Array<Object>} planets - List of all planets.
   * @param {Array<Object>} showAllPanets - Copy of list of all planets.
   * @param {boolean} allPlanetsVisible -
   */
  planets: Planet[];
  showAllPlanets: Planet[];
  allPlanetsVisible: boolean = true;
  errorMsg: string = "";
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

  //  Filter planet
  searchPlanet(name) {
    //  copy exisiting Planet array
    this.showAllPlanets = this.planets.slice();

    //  find the planet
    let result = this.planets.filter(
      planet => planet.name.toLowerCase() === name
    );

    // update planet Array
    this.planets = result;

    //  display the button to show default list of planets
    this.allPlanetsVisible = false;

    if (this.planets.length == 0) {
      this.searchPlanetsAgain();
    }
  }
  ngOnInit() {
    this.getPlanets();
  }

  // Show all planets again ont the screen after filtering planets
  showPlanets() {
    //  Restore default list of planets
    this.planets = this.showAllPlanets;

    //  hide the button  displaying all planets
    this.allPlanetsVisible = true;
  }
  searchPlanetsAgain() {
    this.errorMsg = "No planets found. Search again in a second";
    setTimeout(() => {
      this.showPlanets();
      this.errorMsg = "";
    }, 2000);
  }
}
