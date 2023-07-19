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
  };

  deleteRecipe(recipeId?: number) {
    if (recipeId !== undefined) {
    this.imageSearchService.deleteRecipe(recipeId).subscribe(
      () => {
        console.log('Record deleted successfully');
        console.log(recipeId)
        // Handle success, update the UI, etc.
      },
      (error) => {
        console.error('Error deleting record:', error);
        // Handle error, show error message, etc.
      }

    );
    }
    location.reload();
  }


}
