import { Component, OnInit, Input } from "@angular/core";
import { Planet } from "./../../../models/Planet";
import { ActivatedRoute } from "@angular/router";
import { PlanetService } from "./../../services/planet.service";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-planet-item",
  templateUrl: "./planet-item.component.html",
  styleUrls: ["./planet-item.component.scss"]
})
export class PlanetItemComponent implements OnInit {
  planet: any;
  films: any;
  residents: any;
  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getPlanet();
  }
  //  Fetch data for individual planet and display them on screen
  getPlanet(): void {
    const name = this.route.snapshot.paramMap.get("id");
    this.planetService.getPlanet(name).subscribe(res => {
      const toArr = Array.from(Object.values(res["results"]));
      this.planet = [...toArr][0];

      //  Show  films on individual planet card.
      this.films = this.showAdditionalData(this.planet.films, "title", "films");

      //  Show  residents  on individual planet card.
      this.residents = this.showAdditionalData(
        this.planet.residents,
        "name",
        "residents"
      );
    });
  }
  //  Fetch addidtional data from server : films or residents

  fetchAdditionalData(collection: string[]) {
    if (collection.length > 0) {
      let requests = [];
      for (let item of collection) {
        let requestName = this.http.get(item);
        requests.push(requestName);
      }
      return requests;
    }
    return;
  }
  //  Show additional data on the planet card
  showAdditionalData(collection: string[], property: string, data: string) {
    if (collection.length > 0) {
      forkJoin(this.fetchAdditionalData(collection)).subscribe(results => {
        let arr = [];
        for (let i = 0; i < results.length; i++) {
          arr.push(results[i][property]);
        }
        this[data] = [...arr];
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
