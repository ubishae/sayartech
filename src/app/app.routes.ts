import { Routes } from "@angular/router";
import { PaymentComponent } from "./payment/payment.component";
import { HomeComponent } from "./home/home.component";
import { RentComponent } from "./rent/rent.component";
import { RentTypeComponent } from "./rent-type/rent-type.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutSuccessComponent } from "./checkout-success/checkout-success.component";
import { DurationComponent } from "./duration/duration.component";
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "rent/:carId",
    component: RentComponent,
  },
  {
    path: "rent/car:Id/type",
    component: RentTypeComponent,
  },
  {
    path: "duration/:carId",
    component: DurationComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
  },
  {
    path: "checkout-success",
    component: CheckoutSuccessComponent,
  },
];
