import { Component, EventEmitter, Output,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Investment } from '../investment.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
// @Output() calculate = new EventEmitter<Investment>();


//   enteredIntial='0';
//   enteredAnnual='0';
//   enteredExpectedReturn='5';
//   enteredDuration='5';

  
// onSubmit() {
// this.calculate.emit({
//    initialInvestment:+this.enteredIntial,
//     duration:+this.enteredDuration,
//     expectedReturn: +this.enteredExpectedReturn,
//     annualInvestment: +this.enteredAnnual,
// }


//   )
// }
 enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

}
