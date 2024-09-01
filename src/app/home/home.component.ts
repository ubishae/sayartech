import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroArrowRight,
  heroBell,
  heroCalendar,
  heroClock,
  heroPaperAirplane,
} from "@ng-icons/heroicons/outline";

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
export class HomeComponent {}
