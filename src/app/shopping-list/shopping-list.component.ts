import { Component, OnInit } from '@angular/core';
 import { Ingredient } from '../shared/ingredient';
 import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  items: Ingredient[] =[];
  constructor(private sls :ShoppingListService) {

   }

   ngOnInit(){
     this.items = this.sls.getItems();
     console.log(this.items);
   }

}
