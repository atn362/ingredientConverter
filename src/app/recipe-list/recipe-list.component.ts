import { Component, OnInit } from '@angular/core';
import { CreateRecipeService } from '../create-recipe.service';
import { HttpClient } from '@angular/common/http';
import { ImageSearchService } from '../image-search.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit  {

  recipeItems: string[] = [];
  query: string = '';
  images: any[] = [];
  newTitle: string = '';
  titleList: string[] = [];
  newMethod: string = '';
  methodList: string [] = [];
  imageURL!: string;
  textAreaPresent: boolean = true;
  disableTitleAdd: boolean = true;

  constructor(private createRecipeService: CreateRecipeService, private http: HttpClient, private imageSearchService: ImageSearchService) {}

  ngOnInit() {
    this.createRecipeService.getRecipeItems()
      .subscribe(items => {
        this.recipeItems = items;
      });
  }

  // searchImage() {
  //   this.http.get<any>(`https://api.unsplash.com/photos/random?query=${this.newTitle}&client_id=4zFYJerlFC5LblA06tev6mQ8erJzBWn-WNK0nVnKCaU`)
  //     .subscribe(response => {
  //       this.imageURL = response.urls.regular;
  //     });
  // }

  search() {
    this.imageSearchService.searchImages(this.query).subscribe((response: any) => {
      this.images = response.items;
    });

    this.imageSearchService.getIngredientList();
    this.imageSearchService.postIngredientData(this.query, this.newMethod);
    console.log(this.newMethod);
    console.log(this.query);
  }

  removeTextArea() {
    if (this.methodList.length >= 1) {
      this.textAreaPresent = false
    }else if (this.titleList.length >= 1) {
      this.disableTitleAdd = false
    }
  }

  addTitle() {
    if (this.newTitle.trim() !== '') {
      this.titleList.push(this.newTitle);
      this.newTitle = '';
    }
    this.removeTextArea();
  }

  addMethod() {
    if (this.newMethod.trim() !== '') {
      this.methodList.push(this.newMethod);
      this.newMethod = '';
    }
  this.removeTextArea();
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
