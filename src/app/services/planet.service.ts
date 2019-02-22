import { Injectable } from "@angular/core";
import { Planets } from "./../mock-planets";
import { Planet } from "./../../models/Planet";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PlanetService {
  constructor() {}

  //  Get Planets
  getPlanets(): Observable<Planet[]> {
    return of(Planets);
  }

  //  Get single planet

  getPlanet(name: string): Observable<Planet> {
    return of(Planets.find(planet => planet.name === name));
  }
}
