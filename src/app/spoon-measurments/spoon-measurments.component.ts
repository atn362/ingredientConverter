import { Component } from '@angular/core';
import { SpoonIngredients } from '../enums/spoonIngredients';
import { SpoonMeasurements } from '../enums/spoonMeasurments';
import { CreateRecipeService } from '../create-recipe.service';



@Component({
  selector: 'app-spoon-measurments',
  templateUrl: './spoon-measurments.component.html',
  styleUrls: ['./spoon-measurments.component.css']
})
export class SpoonMeasurmentsComponent {
   constructor(private createRecipeService: CreateRecipeService){}

  input!: number;
  result!: number;
  selectedIngredients!: SpoonIngredients;
  selectedPortion!: SpoonMeasurements;
  portions: string[] = Object.values(SpoonMeasurements);
  ingredients: string[] = Object.values(SpoonIngredients);
  itemList: string[] = [];
  newItem: string = '';
  additionalIngredient: string = '';

   addItem() {
    if (this.newItem.trim() !== '') {
      this.createRecipeService.addItem(this.newItem + ' Grams ' + this.selectedIngredients);
      this.newItem = '';
    }
  }

  addAdditionalIngredient() {
      if(this.additionalIngredient.trim() !== '') {
      this.createRecipeService.addItem(this.additionalIngredient);
      this.additionalIngredient = '';
    }
  }

  handleIngredientSelection(): void {
    switch(this.selectedIngredients){
      case SpoonIngredients.SALT:
        this.result = Math.ceil(this.input * 6);
        break;
      case SpoonIngredients.SUGAR:
        this.result = Math.ceil(this.input * 4);
        break;
      case SpoonIngredients.YEAST:
        this.result = Math.ceil(this.input * 3);
        break;
      case SpoonIngredients.BAKINGPOWDER:
        this.result = Math.ceil(this.input * 5);
        break;
      case SpoonIngredients.BAKINGSODA:
        this.result = Math.ceil(this.input * 6);
        break;
      case SpoonIngredients.CINNAMON:
        this.result = Math.ceil(this.input * 3);
        break;
      case SpoonIngredients.OIL:
        this.result = Math.ceil(this.input * 5);
        break;
      case SpoonIngredients.WATER:
        this.result = Math.ceil(this.input * 5);
        break;
      case SpoonIngredients.VANILLA:
        this.result = Math.ceil(this.input * 4);
        break;
          default:
          console.log('Unknown Selection');
          break;
    }
    this.newItem = this.result.toString();
  }

  hanglePortionSize(): void {
    switch(this.selectedPortion) {
      case SpoonMeasurements.EIGHTTSP:
        this.input = .125;
        break;
      case SpoonMeasurements.QUARTERTSP:
        this.input = .25;
        break;
      case SpoonMeasurements.HALFTSP:
        this.input = .5;
        break;
      case SpoonMeasurements.THREEQUARTERTSP:
        this.input = .75;
        break;
      case SpoonMeasurements.TEASPOON:
        this.input = 1;
        break;
      case SpoonMeasurements.ONEHALFTSP:
        this.input = 1.5;
        break;
      case SpoonMeasurements.TWOTEASPOON:
        this.input = 2;
        break;
      case SpoonMeasurements.QUARTERTBSP:
        this.input = .75;
        break;
      case SpoonMeasurements.HALFTBSP:
        this.input = 1.5;
        break;
      case SpoonMeasurements.THREEQUARTERTBSP:
        this.input = 2.25;
        break;
      case SpoonMeasurements.TABLESPOON:
        this.input = 3;
        break;
      case SpoonMeasurements.TWOTABLESPOON:
        this. input = 6;
        break;
          default:
          console.log('Unknown Selection');
          break;
    }
  }



}
