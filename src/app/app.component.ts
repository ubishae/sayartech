import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroBell } from "@ng-icons/heroicons/outline";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  viewProviders: [provideIcons({ heroBell })],
})
export class AppComponent {
  title = "sayartech";

  currentUser: IUser = {
    name: "",
    surname: "",
    userName: "",
    emailAddress: "",
    id: 0,
  };

  constructor(private http: HttpClient) {
    this.http
      .get<IResponse<ICurrentInfo>>(
        "http://carstoreapi.somee.com/api/services/app/Session/GetCurrentLoginInformations",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      )
      .subscribe((res) => {
        this.currentUser = res.result.user;
      });
  }

  logout() {
    localStorage.removeItem("accessToken");
    this.currentUser = {
      name: "",
      surname: "",
      userName: "",
      emailAddress: "",
      id: 0,
    };
  }
}
