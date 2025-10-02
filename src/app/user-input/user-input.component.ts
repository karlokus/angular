import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
//import type { InvestmentInput } from '../investment-input.model';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css',
})
export class UserInputComponent {
    enteredInitialInvestment = signal('0');
    enteredAnnualInvestment = signal('0');
    enteredExpectedReturn = signal('5');
    enteredDuration = signal('10');
    //calculate = output<InvestmentInput>();

    constructor(private readonly investmentService: InvestmentService) {}

    onSubmit() {
        const data = {
            initialInvestment: +this.enteredInitialInvestment(),
            duration: +this.enteredDuration(),
            expectedReturn: +this.enteredExpectedReturn(),
            annualInvestment: +this.enteredAnnualInvestment(),
        };

        //this.calculate.emit(data);
        this.investmentService.calculateInvestmentResults(data);

        this.enteredInitialInvestment.set('0');
        this.enteredAnnualInvestment.set('0');
        this.enteredExpectedReturn.set('5');
        this.enteredDuration.set('10');
    }
}
