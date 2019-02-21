import { Component, OnInit, Input } from "@angular/core";
import { Planets } from "./../../../models/Planets";

@Component({
  selector: "app-planet-item",
  templateUrl: "./planet-item.component.html",
  styleUrls: ["./planet-item.component.scss"]
})
export class PlanetItemComponent implements OnInit {
  @Input() planet: Planets;
  constructor() {}

  ngOnInit() {}
}
