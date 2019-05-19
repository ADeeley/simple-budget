import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../shared/services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.sass']
})
export class AddTransactionComponent implements OnInit {
  addItemForm: FormGroup;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.addItemForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
    });
  }

  addItem() {
    this.transactionService.addTransaction(this.addItemForm.value);
  }

}
