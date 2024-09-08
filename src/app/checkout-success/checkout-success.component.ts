import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroCheckCircle } from "@ng-icons/heroicons/outline";

@Component({
  selector: "app-checkout-success",
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  templateUrl: "./checkout-success.component.html",
  styleUrl: "./checkout-success.component.css",
  viewProviders: [provideIcons({ heroCheckCircle })],
})
export class CheckoutSuccessComponent {}
