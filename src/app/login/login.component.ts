import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  login = new FormGroup({
    userNameOrEmailAddress: new FormControl(""),
    password: new FormControl(""),
    rememberClient: new FormControl(false),
  });

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  onSubmit() {
    this.http
      .post<
        IResponse<ILogin>
      >("https://carstores.sayaratech.net/api/TokenAuth/Authenticate", this.login.value)
      .subscribe((res) => {
        console.log(res.result);
        localStorage.setItem("accessToken", res.result.accessToken);
        // this.http
        //   .get<IResponse<ICurrentInfo>>(
        //     "https://carstores.sayaratech.net/api/services/app/Session/GetCurrentLoginInformations",
        //     {
        //       headers: {
        //         Authorization: `Bearer ${res.result.accessToken}`,
        //       },
        //     },
        //   )
        //   .subscribe((res) => {});
        this.router.navigate(["/login"]);
      });

    this.login.reset();
  }
}
