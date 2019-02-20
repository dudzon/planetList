import { Component, OnInit } from "@angular/core";
import { Planets } from "./../../../models/Planets";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  planets: Planets[];
  constructor() {}

  ngOnInit() {
    this.planets = [
      {
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        climate: "temperate",
        terrain: "grasslands, mountains",
        population: "2000000000"
      },
      {
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        climate: "temperate, tropical",
        terrain: "jungle, rainforests",
        population: "1000"
      },
      {
        name: "Hoth",
        rotation_period: "23",
        orbital_period: "549",
        climate: "frozen",
        terrain: "tundra, ice caves, mountain ranges",
        population: "unknown"
      },
      {
        name: "Dagobah",
        rotation_period: "23",
        orbital_period: "341",
        climate: "murky",
        terrain: "swamp, jungles",
        population: "unknown"
      },
      {
        name: "Bespin",
        rotation_period: "12",
        orbital_period: "5110",
        climate: "temperate",
        terrain: "gas giant",
        population: "6000000"
      },
      {
        name: "Endor",
        rotation_period: "18",
        orbital_period: "402",
        climate: "temperate",
        terrain: "forests, mountains, lakes",
        population: "30000000"
      },
      {
        name: "Naboo",
        rotation_period: "26",
        orbital_period: "312",
        climate: "temperate",
        terrain: "grassy hills, swamps, forests, mountains",
        population: "4500000000"
      },
      {
        name: "Coruscant",
        rotation_period: "24",
        orbital_period: "368",
        climate: "temperate",
        terrain: "cityscape, mountains",
        population: "1000000000000"
      },
      {
        name: "Kamino",
        rotation_period: "27",
        orbital_period: "463",
        climate: "temperate",
        terrain: "ocean",
        population: "1000000000"
      },
      {
        name: "Geonosis",
        rotation_period: "30",
        orbital_period: "256",
        climate: "temperate, arid",
        terrain: "rock, desert, mountain, barren",
        population: "100000000000"
      }
    ];
  }
}
