import { Component, OnInit } from "@angular/core";
import { Planet } from "./../../../models/Planet";
import { PlanetService } from "./../../services/planet.service";
import { PageEvent } from "@angular/material";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  chunks: Planet[];
  allPlanetsVisible: boolean = true;
  errorMsg: string = "";

  // Paginator Data
  length: number = 61;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  activePageDataChunk = [];

  constructor(private planetService: PlanetService) {}

  //  it all starts here :)
  ngOnInit() {
    this.getPlanets();
  }

  //  Fetch planets and display them on screen

  // }
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
      this.setPlanetsChunk();
    });
  }

  //  Filter planet

  searchPlanet(name) {
    //  find the planet from not mutated initial planet array
    let result = this.planets.filter(
      planet => planet.name.toLowerCase() === name
    );

    // update chunks array to display result on page
    this.chunks = result;

    //  display the button to show default list of planets
    this.allPlanetsVisible = false;

    //  When no planets have been found, show all planets again after two seconds
    if (this.chunks.length == 0) {
      this.searchPlanetsAgain();
    }
  }

  // Show all planets again on the screen after filtering planets
  showPlanets() {
    //  Restore default list of planets
    this.chunks = this.activePageDataChunk;

    //  hide the button  displaying all planets
    this.allPlanetsVisible = true;
  }

  // search  planets again when no results have been found
  searchPlanetsAgain() {
    this.errorMsg = "No planets found. Search again in a second";
    setTimeout(() => {
      this.showPlanets();
      this.errorMsg = "";
    }, 2000);
  }

  //  set number of planets according to match paginator page size value
  setPlanetsChunk() {
    //  copy planets array to manipulate data in paginator
    this.chunks = [...this.planets];

    //  set initial number of displayed planets
    this.activePageDataChunk = this.chunks.slice(0, this.pageSize);

    //   display planets on the page
    this.chunks = this.activePageDataChunk;
  }
  //  event fired when user wants to to change number of planets on page
  onPageChanged(e) {
    const offset = (e.pageIndex + 1 - 1) * e.pageSize;
    this.activePageDataChunk = this.planets.slice(offset).slice(0, e.pageSize);
    this.chunks = this.activePageDataChunk;
  }
}
