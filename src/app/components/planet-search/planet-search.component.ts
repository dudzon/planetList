import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-planet-search",
  templateUrl: "./planet-search.component.html",
  styleUrls: ["./planet-search.component.scss"]
})
export class PlanetSearchComponent implements OnInit {
  constructor() {}
  @Input() errorMsg: string;
  @Output() searchPlanet: EventEmitter<any> = new EventEmitter();
  planetName: string;

  // Passing up the planet name to filter list of planets in the parent component.

  onSubmit() {
    if (!this.planetName) return false;
    this.searchPlanet.emit(this.planetName.toLowerCase());
  }

  ngOnInit() {}
}
