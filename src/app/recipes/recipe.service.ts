import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes : Recipe[] = [

    new Recipe('Coconut sambol', 'Very tasty and spicy', 'http://www.dailyfoodrecipes.com/wp-content/uploads/2012/09/coconut-sambol-pol-samboladaily-food-receipes-com.jpg',
     [new Ingredient('Coconut',1),new Ingredient('Chillie',500),new Ingredient('Salt',0.25),new Ingredient('Onion',5)]),
    new Recipe('Summer Salad 1', 'Superb', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
     [new Ingredient('Coconut',1),new Ingredient('Chillie',500),new Ingredient('Salt',0.25),new Ingredient('Onion',5)]),
    new Recipe('Summer Salad 2', 'Superb', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
     [new Ingredient('Coconut',1),new Ingredient('Chillie',500),new Ingredient('Salt',0.25),new Ingredient('Onion',5)]),
    new Recipe('Summer Salad 3', 'Superb', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', 
     [new Ingredient('Coconut',1),new Ingredient('Chillie',500),new Ingredient('Salt',0.25),new Ingredient('Onion',5)]),
    new Recipe('Summer Salad 4', 'Superb', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
     [new Ingredient('Coconut',1),new Ingredient('Chillie',500),new Ingredient('Salt',0.25),new Ingredient('Onion',5)]),

];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
