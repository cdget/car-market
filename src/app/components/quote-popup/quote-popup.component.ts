import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-quote-popup',
  templateUrl: './quote-popup.component.html',
  styleUrls: ['./quote-popup.component.css']
})
export class QuotePopupComponent implements OnInit{
  header: string = '';
  months:number =  10;
  amount: number = 0;
  carPrice = 0;
  interestRate: number = 0.14;
  averageMonthlyPayment: number = 0;
  totalMonthlyPayment: number = 0;
  
  ngOnInit(): void {
    this.calculatePayment();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      model: string;
      price: number
}
  ) {

    this.amount = data.price;
    this.carPrice = data.price;
    this.header = data.model;

  }

  calculatePayment() {
    const loanAmount = this.amount; 
    const duration = this.months;

    const monthlyPaymentExcludingInterest = loanAmount / duration;
    let remainingPaymentForInterest = loanAmount;
    let totalMonthlyPayment = 0;

    for (let i = 0; i < duration; i++) {
      const monthlyPaymentInterest = remainingPaymentForInterest * this.interestRate;
      totalMonthlyPayment += monthlyPaymentExcludingInterest + monthlyPaymentInterest;
      remainingPaymentForInterest -= monthlyPaymentExcludingInterest;
    }

    this.averageMonthlyPayment = totalMonthlyPayment / duration;
    this.totalMonthlyPayment = totalMonthlyPayment;
  }

}
