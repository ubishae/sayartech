import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-car-details",
  standalone: true,
  imports: [],
  templateUrl: "./car-details.component.html",
  styleUrl: "./car-details.component.css",
})
export class CarDetailsComponent {
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.id = route.snapshot.paramMap.get("id");
    http
      .get<
        IResponse<ICar>
      >(`https://carstores.sayaratech.net/api/services/app/CarModels/Get?Id=${this.id}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
