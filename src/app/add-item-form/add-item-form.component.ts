import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem('', null);
   /*by default there wont be anything inside the form so for now we are adding empty stringa nd null amount
*/
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();

  }

}
