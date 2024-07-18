import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/model/transaction';
import { sample_transaction } from '../data';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}

  // getTransactions(startDate: string, endDate: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`);
  // }
  getTransactionAll():Transaction[]{
    return sample_transaction;
  }
  getTransactionById(transactionId:string):Transaction{
    return this.getTransactionAll().find(transaction=>transaction.id == transactionId)??new Transaction
    ()
  }
}
