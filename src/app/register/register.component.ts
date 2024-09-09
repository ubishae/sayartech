import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  register = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    userName: new FormControl(),
    emailAddress: new FormControl(),
    password: new FormControl(),
    captchaResponse: new FormControl(),
    phoneNumber: new FormControl(),
  });

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {}

  onSubmit() {
    this.http
      .post<
        IResponse<IRegister>
      >("https://carstores.sayaratech.net/api/services/app/Account/Register", this.register.value)
      .subscribe((res) => {
        this.router.navigate(["/login"]);
      });
  }
}
