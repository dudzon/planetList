import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-planet-search",
  templateUrl: "./planet-search.component.html",
  styleUrls: ["./planet-search.component.scss"]
})
export class PlanetSearchComponent implements OnInit {
  /**
   * Represents a User search .
   * @param {string} planetName - User query - planet name.
   * @param {Object} text - Validator for input.
   */
  constructor() {}
  @Input() errorMsg: string;
  @Output() searchPlanet: EventEmitter<any> = new EventEmitter();
  planetName: string;

  // Passing up the data to parent component.
  text = new FormControl("", [Validators.required]);

  getErrorMessage() {
    return this.text.hasError("required") ? "You must enter a planet name" : "";
  }
  onSubmit() {
    if (!this.planetName) return false;
    this.searchPlanet.emit(this.planetName.toLowerCase());
  }

  ngOnInit() {}
}
