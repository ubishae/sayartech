import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: "app-duration",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./duration.component.html",
  styleUrl: "./duration.component.css",
})
export class DurationComponent {
  carId: string | null;
  car: ICar | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.carId = route.snapshot.paramMap.get("carId");
    http
      .get<
        IResponse<ICar>
      >(`http://carstoreapi.somee.com/api/services/app/CarModels/Get?Id=${this.carId}`)
      .subscribe((res) => {
        this.car = res.result;
      });
  }
}
