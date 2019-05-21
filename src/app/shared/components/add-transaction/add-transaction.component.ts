import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { TransactionDetail } from '../../models/transactionDetail.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.sass']
})
export class AddTransactionComponent implements OnInit {
  addItemForm: FormGroup;
  groupsAvailable: string[];
  editMode = false;
  index: number;


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.addItemForm = new FormGroup({
      group: new FormControl('misc', Validators.required),
      transaction: new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    });

    this.groupsAvailable = this.transactionService.groups;

    this.transactionService.onEditTransaction.subscribe((transactionDetail: TransactionDetail) => {
      this.editMode = true;
      this.index = transactionDetail.index;
      this.addItemForm.patchValue(
        {
          group: transactionDetail.group,
          transaction: {
            name: transactionDetail.transaction.name,
            amount: transactionDetail.transaction.amount,
          }
        });
    });
  }

  addItem() {
    this.transactionService.addTransaction(this.addItemForm.value.group, this.addItemForm.value.transaction);
    this.addItemForm.reset();
  }

  cancelEdit() {
    this.editMode = false;
    this.addItemForm.reset();
  }

  deleteTransaction() {
    this.transactionService.removeTransaction(this.addItemForm.value.group, this.index);
  }

}
