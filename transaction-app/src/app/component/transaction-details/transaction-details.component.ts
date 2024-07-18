import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../service/transaction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    //const id = this.route.snapshot.paramMap.get('id');
    // this.transactionService.getTransactions('2020-01-01', '2020-12-31').subscribe(data => {
    //   this.transaction = data.find((t: { id: string | null; }) => t.id === id);
this.route.params.subscribe((params)=>{
  if(params['id'])
    {
    this.transaction= this.transactionService.getTransactionById(params['id']);
  }
});
this.createForm();
}
 

      

  createForm() {
    this.transactionForm = this.fb.group({
      id: [{ value: this.transaction.id, disabled: true }],
      date: [{ value: new Date(this.transaction.date).toLocaleDateString('en-GB'), disabled: true }],
      comments: [this.transaction.Comments, [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/)]]
    });
  }
  moveToTransactionList(){
    this.router.navigate(['/transaction-list'])
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.transaction.Comments = this.transactionForm.value.comments;
      this.router.navigate(['/transaction-list']);
    }
  }
}
