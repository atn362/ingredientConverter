import { Component } from '@angular/core';
import { ImageSearchService } from '../image-search.service';
import { Recipe } from '../interfaces/Recipe';

@Component({
  selector: 'app-recipe-database',
  templateUrl: './recipe-database.component.html',
  styleUrls: ['./recipe-database.component.css']
})
export class RecipeDatabaseComponent {

  public recipeList: Recipe[] = [];

  constructor(private imageSearchService: ImageSearchService) {
    this.imageSearchService.getRecipeArray();
    this.imageSearchService.recipeList$.subscribe(
      recipeList => {
        this.recipeList = recipeList
      }
    )
    console.log('My comment List', this.recipeList)
  };







}
