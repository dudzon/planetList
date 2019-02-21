import { Component, OnInit } from "@angular/core";
import { Planet } from "./../../../models/Planet";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"]
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  constructor() {}

  ngOnInit() {
    this.planets = [
      {
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000",
        residents: [
          "https://swapi.co/api/people/5/",
          "https://swapi.co/api/people/68/",
          "https://swapi.co/api/people/81/"
        ],
        films: [
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/1/"
        ]
      },
      {
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "temperate, tropical",
        gravity: "1 standard",
        terrain: "jungle, rainforests",
        surface_water: "8",
        population: "1000",
        residents: [],
        films: ["https://swapi.co/api/films/1/"]
      },
      {
        name: "Hoth",
        rotation_period: "23",
        orbital_period: "549",
        diameter: "7200",
        climate: "frozen",
        gravity: "1.1 standard",
        terrain: "tundra, ice caves, mountain ranges",
        surface_water: "100",
        population: "unknown",
        residents: [],
        films: ["https://swapi.co/api/films/2/"]
      },
      {
        name: "Dagobah",
        rotation_period: "23",
        orbital_period: "341",
        diameter: "8900",
        climate: "murky",
        gravity: "N/A",
        terrain: "swamp, jungles",
        surface_water: "8",
        population: "unknown",
        residents: [],
        films: [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/"
        ]
      },
      {
        name: "Bespin",
        rotation_period: "12",
        orbital_period: "5110",
        diameter: "118000",
        climate: "temperate",
        gravity: "1.5 (surface), 1 standard (Cloud City)",
        terrain: "gas giant",
        surface_water: "0",
        population: "6000000",
        residents: ["https://swapi.co/api/people/26/"],
        films: ["https://swapi.co/api/films/2/"]
      },
      {
        name: "Endor",
        rotation_period: "18",
        orbital_period: "402",
        diameter: "4900",
        climate: "temperate",
        gravity: "0.85 standard",
        terrain: "forests, mountains, lakes",
        surface_water: "8",
        population: "30000000",
        residents: ["https://swapi.co/api/people/30/"],
        films: ["https://swapi.co/api/films/3/"]
      },
      {
        name: "Naboo",
        rotation_period: "26",
        orbital_period: "312",
        diameter: "12120",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grassy hills, swamps, forests, mountains",
        surface_water: "12",
        population: "4500000000",
        residents: [
          "https://swapi.co/api/people/3/",
          "https://swapi.co/api/people/21/",
          "https://swapi.co/api/people/36/",
          "https://swapi.co/api/people/37/",
          "https://swapi.co/api/people/38/",
          "https://swapi.co/api/people/39/",
          "https://swapi.co/api/people/42/",
          "https://swapi.co/api/people/60/",
          "https://swapi.co/api/people/61/",
          "https://swapi.co/api/people/66/",
          "https://swapi.co/api/people/35/"
        ],
        films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/"
        ]
      },
      {
        name: "Coruscant",
        rotation_period: "24",
        orbital_period: "368",
        diameter: "12240",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "cityscape, mountains",
        surface_water: "unknown",
        population: "1000000000000",
        residents: [
          "https://swapi.co/api/people/34/",
          "https://swapi.co/api/people/55/",
          "https://swapi.co/api/people/74/"
        ],
        films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/"
        ]
      },
      {
        name: "Kamino",
        rotation_period: "27",
        orbital_period: "463",
        diameter: "19720",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "ocean",
        surface_water: "100",
        population: "1000000000",
        residents: [
          "https://swapi.co/api/people/22/",
          "https://swapi.co/api/people/72/",
          "https://swapi.co/api/people/73/"
        ],
        films: ["https://swapi.co/api/films/5/"]
      },
      {
        name: "Geonosis",
        rotation_period: "30",
        orbital_period: "256",
        diameter: "11370",
        climate: "temperate, arid",
        gravity: "0.9 standard",
        terrain: "rock, desert, mountain, barren",
        surface_water: "5",
        population: "100000000000",
        residents: ["https://swapi.co/api/people/63/"],
        films: ["https://swapi.co/api/films/5/"]
      }
    ];
  }
}
