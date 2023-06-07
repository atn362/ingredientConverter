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

   addItem() {
    if (this.newItem.trim() !== '') {
      this.createRecipeService.addItem(this.newItem + ' Grams ' + this.selectedIngredients);
      this.newItem = '';
    }
  }

  handleIngredientSelection(): void {
    switch(this.selectedIngredients){
      case SpoonIngredients.SALT:
        this.result = Math.floor(this.input * 6);
        break;
      case SpoonIngredients.BAKINGPOWDER:
        this.result = Math.floor(this.input * 5);
        break;
      case SpoonIngredients.BAKINGSODA:
        this.result = Math.floor(this.input * 6);
        break;
      case SpoonIngredients.CINNAMON:
        this. result = Math.floor(this.input * 3);
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
        default:
        console.log('Unknown Selection');
        break;
    }
  }



}
