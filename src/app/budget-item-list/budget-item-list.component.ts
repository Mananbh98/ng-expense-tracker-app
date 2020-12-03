import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit();
  }

  onCardClicked(item: BudgetItem) {
    //show the edit model dialog

    const diallogRef = this.dialog.open(EditItemModelComponent, {
      width: '560px',
      data: item,
    });
    diallogRef.afterClosed().subscribe((result) => {
      // result is update budget
      // check if result haws a value
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
