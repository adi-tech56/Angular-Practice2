import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import type { Investment } from './investment.model';
import { InvestmentResults } from "./investment-results/investment-results";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('CalculatorApp');
//  resultsData?: {
//     year: number;
//     interest: number;
//     valueEndOfYear: number;
//     annualInvestment: number;
//     totalInterest: number;
//     totalAmountInvested: number;
//   }[];


//   calculateInvestmentResults(data:Investment) {

//     const {initialInvestment,duration,expectedReturn,annualInvestment} =data;
//     console.log(data);
//   const annualData = [];
//   let investmentValue = initialInvestment;

//   for (let i = 0; i < duration; i++) {
//     const year = i + 1;
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     const totalInterest =
//       investmentValue - annualInvestment * year - initialInvestment;
//     annualData.push({
//       year: year,
//       interest: interestEarnedInYear,
//       valueEndOfYear: investmentValue,
//       annualInvestment: annualInvestment,
//       totalInterest: totalInterest,
//       totalAmountInvested: initialInvestment + annualInvestment * year,
//     });
//   }
//  console.log(annualData);
//       this.resultsData = annualData;
// }
}
