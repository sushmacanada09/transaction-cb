import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { Transaction } from 'src/app/shared/model/transaction';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  
  transactions: Transaction[] = [];
  constructor(private transactionService: TransactionService, activatedRoute: ActivatedRoute) {
   
      let transactionObservalbe:Observable<Transaction[]>;
      activatedRoute.params.subscribe((params) => {
       
        transactionObservalbe = transactionService.getTransactionAll();
  
        transactionObservalbe.subscribe((transactions) => {
            this.transactions= transactions;
          })
      })
    }
  
    ngOnInit(): void {
    }
}
