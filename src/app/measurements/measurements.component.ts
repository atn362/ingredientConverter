import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../enums/ingredients';
import { Portion } from '../enums/portion';
import { CreateRecipeService } from '../create-recipe.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']

})
export class MeasurementsComponent {
  constructor(private createRecipeService: CreateRecipeService){}

  input!: number;
  result!: number;
  totalEggs: string = '';
  eggCounter: number = 0;
  selectedIngredients!: Ingredients;
  selectedPortion!: Portion;
  portions: string[] = Object.values(Portion);
  ingredients: string[] = Object.values(Ingredients);
  itemList: string[] = [];
  newItem: string = '';
  disableTitleAdd: boolean = false;

  addItem() {
    if (this.newItem.trim() !== '') {
      this.createRecipeService.addItem(this.newItem + ' Grams ' + this.selectedIngredients);
      this.newItem = '';
    }
  }

  increment() {
    this.eggCounter++;
  }

  decrement() {
    this.eggCounter--;
  }

  addEggToList() {
    this.totalEggs = this.eggCounter.toString();
    if(this.totalEggs.trim() !== '') {
      this.createRecipeService.addItem(this.totalEggs + ' Eggs');
      this.totalEggs = '';
    }
    this.eggCounter = 0;
  }



  handleIngredientsSelection(): void {
    switch(this.selectedIngredients){
      case Ingredients.FLOUR:
        this.result = Math.floor(this.input * 120);
        break;
      case Ingredients.BREADFLOUR:
        this.result = Math.floor(this.input * 120);
        break;
      case Ingredients.CAKEFLOUR:
        this.result = Math.floor(this.input * 118);
        break;
      case Ingredients.RYEFLOUR:
        this.result = Math.floor(this.input * 136);
        break;
      case Ingredients.DOUBLEZEROFLOUR:
        this.result = Math.floor(this.input * 116);
        break;
      case Ingredients.SUGAR:
        this.result = Math.floor(this.input * 200);
        break;
      case Ingredients.BROWNSUGAR:
        this.result = Math.floor(this.input * 213);
        break;
      case Ingredients.POWDERSUGAR:
        this.result = Math.floor(this.input * 120);
        break;
      case Ingredients.COCOAPOWDER:
        this.result = Math.floor(this.input * 100);
        break;
      case Ingredients.BUTTER:
        this.result = Math.floor(this.input * 226);
        break;
      case Ingredients.SOURCREAM:
        this.result = Math.floor(this.input * 240);
        break;
      case Ingredients.YOGURT:
        this.result = Math.floor(this.input * 245);
        break;
      case Ingredients.WATER:
        this.result = Math.floor(this.input * 236);
        break;
      case Ingredients.MILK:
        this.result = Math.floor(this.input * 236);
        break;
      case Ingredients.CORNMEAL:
        this.result = Math.floor(this.input * 160);
        break;
      case Ingredients.OIL:
        this.result = Math.floor(this.input * 225);
        break;
      case Ingredients.MAYO:
        this.result = Math.floor(this.input * 230);
        break;
      case Ingredients.BLUEBERRIES:
        this.result = Math.floor(this.input * 190);
        break;
      default:
        console.log('Unknown Selection');
        break;
    }
    this.newItem = this.result.toString();
  }

  hanglePortionSize(): void {
    switch(this.selectedPortion) {
      case Portion.QUARTERCUP:
        this.input = .25;
        break;
      case Portion.THRIDCUP:
        this.input = .334;
        break;
      case Portion.HALFCUP:
        this.input = .5;
        break;
      case Portion.TWOTHIRDCUP:
        this.input = .667;
        break;
      case Portion.THREEQUARTERCUP:
        this.input = .75;
        break;
      case Portion.ONECUP:
        this.input = 1;
        break;
      case Portion.ONEQUARTERCUP:
        this.input = 1.25;
        break;
      case Portion.ONETHIRDCUP:
        this.input = 1.334;
        break;
      case Portion.ONEHALFCUP:
        this.input = 1.5;
        break;
      case Portion.ONETWOTHIRDCUP:
        this.input = 1.667;
        break;
      case Portion.ONETHREEQUARTERCUP:
        this.input = 1.75;
        break;
      case Portion.TWOCUPS:
        this.input = 2;
        break;
      case Portion.TWOQUARTERCUP:
        this.input = 2.25;
        break;
      case Portion.TWOONETHIRDCUP:
        this.input = 2.334;
        break;
      case Portion.TWOHALFCUP:
        this.input = 2.5;
        break;
      case Portion.TWOTWOTHIRDCUP:
        this.input = 2.667;
        break;
      case Portion.TWOTHREEQUARTERCUP:
        this.input = 2.75;
        break;
      case Portion.THREECUPS:
        this.input = 3;
        break;
      default:
        console.log('Unknown Selection');
        break;
    }
  }



}
