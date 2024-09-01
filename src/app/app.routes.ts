import { Routes } from "@angular/router";
import { PaymentComponent } from "./payment/payment.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
  },
];
