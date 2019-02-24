import { Injectable } from "@angular/core";
import { Planets } from "./../mock-planets";
import { Planet } from "./../../models/Planet";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PlanetService {
  constructor(private http: HttpClient) {}
  planet: Planet[];
  //  Get Planets
  getPlanets(): Observable<any> {
    let response1 = this.http.get("https://swapi.co/api/planets/?page=1");
    let response2 = this.http.get("https://swapi.co/api/planets/?page=2");
    let response3 = this.http.get("https://swapi.co/api/planets/?page=3");
    let response4 = this.http.get("https://swapi.co/api/planets/?page=4");
    let response5 = this.http.get("https://swapi.co/api/planets/?page=5");
    let response6 = this.http.get("https://swapi.co/api/planets/?page=6");
    let response7 = this.http.get("https://swapi.co/api/planets/?page=7");
    return forkJoin([
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
      response7
    ]);
  }

  //  Get single planet

  getPlanet(name: string): Observable<Planet> {
    const url = `https://swapi.co/api/planets/?search=${name}`;
    return this.http.get<Planet>(url);
  }
}
