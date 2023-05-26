import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../enums/ingredients';
import { Portion } from '../enums/portion';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  input!: number;
  result!: number;

  selectedIngredients!: Ingredients;
  selectedPortion!: Portion;
  portions: string[] = Object.values(Portion);
  ingredients: string[] = Object.values(Ingredients);
  recipeList: string[] = [];

  itemList: string[] = [];
  newItem: string = '';
  newTitle: string = '';
  titleList: string[] = [];
  disableTitleAdd: boolean = false;

  ngOnInit(): void {
  }

  addItem() {
    if (this.newItem.trim() !== '') {
      this.itemList.push(this.newItem);
      this.newItem = '';
    }
  }




  addTitle() {
    if (this.newTitle.trim() !== '') {
      this.titleList.push(this.newTitle);
      this.newTitle = '';
    }
    if(this.titleList.length >= 1) {
      this.disableTitleAdd = true;
    }
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
      case Ingredients.SUGAR:
        this.result = Math.floor(this.input * 200);
        break;
      case Ingredients.BROWNSUGAR:
        this.result = Math.floor(this.input * 213);
        break;
      case Ingredients.POWDERSUGAR:
        this.result = Math.floor(this.input * 120);
        break;
      case Ingredients.BUTTER:
        this.result = Math.floor(this.input * 226);
        break;
      case Ingredients.YOGURT:
        this.result = Math.floor(this.input * 245);
        break;
        console.log('Result', this.result)
      default:
        console.log('Unknown Selection');
        break;
    }
  }

  hanglePortionSize(): void {
    switch(this.selectedPortion) {
      case Portion.QUARTERCUP:
        this.input = .25;
        break;
      case Portion.ONETHIRDCUP:
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
      default:
        console.log('Unknown Selection');
        break;
    }
  }

  clearInput(): void {
    location.reload();
  }


}
