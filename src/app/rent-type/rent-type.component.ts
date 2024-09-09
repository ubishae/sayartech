import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroCreditCard } from "@ng-icons/heroicons/outline";

@Component({
  selector: "app-rent-type",
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: "./rent-type.component.html",
  styleUrl: "./rent-type.component.css",
  viewProviders: [provideIcons({ heroCreditCard })],
})
export class RentTypeComponent {
  carId: string | null;
  car: ICarModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.carId = route.snapshot.paramMap.get("carId");
    http
      .get<
        IResponse<ICarModel>
      >(`http://carstoreapi.somee.com/api/services/app/CarModels/Get?Id=${this.carId}`)
      .subscribe((res) => {
        this.car = res.result;
      });
  }
}
