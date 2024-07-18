import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../service/transaction.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/shared/model/transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailComponent  implements OnInit{
  transactionForm!: FormGroup;
  transaction!: Transaction;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private fb: FormBuilder
  ) {}

  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if(params['id'])
      this.transactionService.getTransactionById(params['id']).subscribe(transaction => {
        this.transaction = transaction;
        if(transaction){
          this.createForm(transaction);
        }
      });
    })

}
  

  createForm(transaction: Transaction) {
    this.transactionForm = this.fb.group({
      id: [{ value: transaction.id, disabled: true }],
      date: [{ value: new Date(this.transaction.date).toLocaleDateString('en-GB'), disabled: true }],
      comments: [this.transaction.Comments, [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/)]]
    });
  }
  moveToTransactionList(){
    this.router.navigate(['/transaction-list'])
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      
        const transactionId = this.transaction.id;
        const updatedComment = this.transactionForm.value.comments;
      
        this.transactionService.updateDataComment(transactionId, updatedComment).subscribe(() => {
          alert('Data saved successfully!');
          this.moveToTransactionList();
        },error => {
          this.moveToTransactionList();
        });

      
    }
  }
}
