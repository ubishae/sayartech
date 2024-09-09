import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroBell,
  heroCreditCard,
  heroCurrencyDollar,
  heroWallet,
} from "@ng-icons/heroicons/outline";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { HlmLabelDirective } from "@spartan-ng/ui-label-helm";
import {
  HlmRadioDirective,
  HlmRadioGroupDirective,
  HlmRadioIndicatorComponent,
} from "@spartan-ng/ui-radiogroup-helm";

@Component({
  selector: "app-payment",
  standalone: true,
  imports: [
    FormsModule,
    NgIconComponent,
    HlmButtonDirective,
    HlmRadioDirective,
    HlmRadioGroupDirective,
    HlmRadioIndicatorComponent,
    HlmLabelDirective,
  ],
  templateUrl: "./payment.component.html",
  styleUrl: "./payment.component.css",
  viewProviders: [
    provideIcons({ heroBell, heroCurrencyDollar, heroWallet, heroCreditCard }),
  ],
})
export class PaymentComponent {
  paymentMethod: string | null = "";

  constructor(private http: HttpClient) {
    http
      .get<
        IResponse<IPaymentMethod>
      >("https://carstoreapi.somee.com/api/services/app/PaymentMethods/GetAllNoPaging")
      .subscribe((res) => {
        console.log(res);
      });
  }
}
