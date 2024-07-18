import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { Transaction } from 'src/app/shared/model/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent  {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.getTransactionAll();
  }

  // ngOnInit() {
  //   this.loadTransactions();
  // }

  loadTransactions() {
    // const startDate = '2020-01-01';
    // const endDate = '2020-12-31';
    // this.transactionService.getTransactions(startDate, endDate).subscribe(data => {
    //   this.transactions = data;
    // });
    this.transactions = this.transactionService.getTransactionAll();
  }
}
