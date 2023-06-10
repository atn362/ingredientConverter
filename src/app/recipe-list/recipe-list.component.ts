import { Component, OnInit } from '@angular/core';
import { CreateRecipeService } from '../create-recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit  {

  recipeItems: string[] = [];

  constructor(private createRecipeService: CreateRecipeService) {}

  ngOnInit() {
    this.createRecipeService.getRecipeItems()
      .subscribe(items => {
        this.recipeItems = items;
      });
  }

  newTitle: string = '';
  titleList: string[] = [];
  newMethod: string = '';
  methodList: string [] = [];
  disableTitleAdd: boolean = false;
  disabledMethodAdd: boolean = false;

  addTitle() {
    if (this.newTitle.trim() !== '') {
      this.titleList.push(this.newTitle);
      this.newTitle = '';
    }
    if(this.titleList.length >= 1) {
      this.disableTitleAdd = true;
    }
  }

  addMethod() {
    if (this.newMethod.trim() !== '') {
      this.methodList.push(this.newMethod);
      this.newMethod = '';
    }
    if (this.methodList.length >= 1) {
      this.disabledMethodAdd = true;
  }
}

  printDiv() {
    const printableElement = document.getElementById('printableDiv');
    if (printableElement) {
      const printContents = printableElement.innerHTML;
      const popupWin = window.open('', '_blank', 'width=600,height=600');
      if (popupWin) {
        popupWin.document.open();
        popupWin.document.write(`
        <html>
          <head>
            <title>Print</title>
          </head>
          <body onload="window.print(); window.close();">
            ${printContents}
          </body>
        </html>
      `);
        popupWin.document.close();
      } else {
        alert('Failed to open the print window.');
      }
    }
  }

  clearInput(): void {
    location.reload();
  }

}
