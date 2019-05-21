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
  originalGroup: string;


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.addItemForm = new FormGroup({
      group: new FormControl('misc', Validators.required),
      transaction: new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(0, [Validators.required, Validators.pattern(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/)]),
      })
    });

    this.groupsAvailable = this.transactionService.groups;

    this.transactionService.onEditTransaction.subscribe((transactionDetail: TransactionDetail) => {
      this.editMode = true;
      this.index = transactionDetail.index;
      this.originalGroup = transactionDetail.group;
      this.addItemForm.patchValue(
        {
          group: transactionDetail.group,
          transaction: {
            name: transactionDetail.transaction.name,
            amount: transactionDetail.transaction.amount
          }
        });
    });
  }

  submit() {
    if (this.editMode) {
      this.transactionService.updateTransaction(
        this.addItemForm.value.group,
        this.originalGroup,
        this.index,
        this.addItemForm.value.transaction
      );
    } else {
      this.transactionService.addTransaction(this.addItemForm.value.group, this.addItemForm.value.transaction);
    }
    this.cleanUpForm();
  }

  cancelEdit() {
    this.cleanUpForm();
  }

  deleteTransaction() {
    this.transactionService.removeTransaction(this.addItemForm.value.group, this.index);
    this.cleanUpForm();
  }

  cleanUpForm() {
    this.addItemForm.reset();
    this.addItemForm.setValue({
      group: 'misc',
      transaction: {
        name: null,
        amount: 0,
      }
    });
    this.editMode = false;
    this.originalGroup = null;
  }
}
