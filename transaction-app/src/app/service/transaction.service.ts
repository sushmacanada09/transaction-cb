import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/model/transaction';
import { sample_transaction } from '../data';
import { TRANSACTIONS_BY_ID_URL, TRANSACTIONS_URL } from '../shared/model/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:3000/transactions';

  constructor(private http: HttpClient) {}

  // getTransactions(startDate: string, endDate: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}?startDate=${startDate}&endDate=${endDate}`);
  // }
  getTransactionAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(TRANSACTIONS_URL);
  }
 
  getTransactionById(transactionId:string):Observable<Transaction>{
    return this.http.get<Transaction>(TRANSACTIONS_BY_ID_URL + transactionId);
  }
}
