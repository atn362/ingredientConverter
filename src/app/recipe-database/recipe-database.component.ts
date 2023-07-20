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
  recipeId: number | undefined;
  fetchedRecipe: Recipe | undefined;

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
        location.reload();
      },
      (error) => {
        console.error('Error deleting record:', error);
        // Handle error, show error message, etc.
      }

    );
    }

  }

  getRecipeById() {
    if (this.recipeId !== undefined) {
      this.imageSearchService.getIngredientById(this.recipeId).subscribe(
        (response: Recipe) => {
          console.log('Record retrieved successfully');
          this.fetchedRecipe = response;
        },
        (error) => {
         alert('No Such Recipe Found')
          // Handle error, show error message, etc.
        }

      );
      }


    }


}
