import { CurrencyPipe } from '@angular/common';
import { Component, Input,inject,computed } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
//  @Input() results?: {
//     year: number;
//     interest: number;
//     valueEndOfYear: number;
//     annualInvestment: number;
//     totalInterest: number;
//     totalAmountInvested: number;
//   }[];
 private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
