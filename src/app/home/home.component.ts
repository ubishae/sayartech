import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroBell,
  heroCalendar,
  heroClock,
  heroPaperAirplane,
} from "@ng-icons/heroicons/outline";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  viewProviders: [
    provideIcons({ heroBell, heroClock, heroCalendar, heroPaperAirplane }),
  ],
})
export class HomeComponent {
  vendors: IVendor[] = [];
  cars: ICar[] = [];

  constructor(private http: HttpClient) {
    http
      .get<
        IResponse<IResult<IVendor[]>>
      >("https://localhost:44311/api/services/app/CarVendors/GetAllNoPaging")
      .subscribe((res) => {
        this.vendors = res.result.items;
      });

    http
      .get<
        IResponse<IResult<ICar[]>>
      >("https://localhost:44311/api/services/app/Cars/GetAllNoPaging")
      .subscribe((res) => (this.cars = res.result.items));
  }
}
