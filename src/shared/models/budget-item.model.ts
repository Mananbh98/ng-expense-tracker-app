/*
export class BudgetItem{    //This is our model export class model_name
  description:string;       // porperty descriptiona and amount
  amount:number;

  constructor(description:string , amount: number){
    this.description = description;
    this.amount = amount;
  }
}
below code is because of typescript
*/

export class BudgetItem{    // This is our model export class model_name

  constructor(public description: string, public amount: number){ // to get description and amount

  }
}
