import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from './interfaces/Recipe'
import {BehaviorSubject, first, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  public recipeList$ = new BehaviorSubject<Recipe[]>([]);
  private apiKey = 'AIzaSyDX4YE3aXF-QZs_7Hgms75-SU0f_FyZiCU';
  private cx = '411888bfb85444023';
  private apiUrl = `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.cx}&searchType=image&q=`;
  private deleteUrl = 'http://localhost:3000/api/deleteRecord/';
  constructor(private http: HttpClient) { }


  postIngredientData(title: string, ingredients:string[], method: string) {
    const requestBody: Recipe = {
      title: title,
      ingredients: ingredients,
      method: method,

    };

    const url = 'http://localhost:3000/api';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, requestBody, { headers }).subscribe(
      (response) => {
        console.log('POST Request Successful:', response, requestBody);
        console.log(requestBody.title)
      },
      (error) => {
        console.error('Error making POST Request:', error);
      }
    );
  }

  getIngredientList() {

    const url = 'http://localhost:3000/api';

    this.http.get(url).subscribe(
      (response) => {
        console.log('GET Request Successful:', response);
      },
      (error) => {
        console.error('Error making GET Request:', error);
      }
    );
  }

  public getRecipeArray() {
    this.http.get<Recipe[]>('http://localhost:3000/api').pipe(first()).subscribe({
      next: (recipeList) => {
        this.recipeList$.next(recipeList);
      },
      error: (error) => {
        console.error('Error making GET Request:', error);
      }
    });
  }

  // getIngredientById(id: number) {

  //   const url = `http://localhost:3000/api/${id}`;

  //   this.http.get(url).subscribe(
  //     (response) => {
  //       console.log('GET Request Successful:', response);

  //     },
  //     (error) => {
  //       console.error('Error making GET Request:', error);
  //     }
  //   );
  // }

  getIngredientById(recipeId: number): Observable<any> {
    const url = `http://localhost:3000/api/${recipeId}`;
    return this.http.get(url);
  }

  deleteRecipe(recipeId: number) {
    return this.http.delete(this.deleteUrl + recipeId);
  }


  // searchImage() {
  //   this.http.get<any>(`https://api.unsplash.com/photos/random?query=${this.newTitle}&client_id=4zFYJerlFC5LblA06tev6mQ8erJzBWn-WNK0nVnKCaU`)
  //     .subscribe(response => {
  //       this.imageURL = response.urls.regular;
  //     });
  // }




  searchImages(query: string) {
    const url = this.apiUrl + encodeURIComponent(query) + '&num=1';
    return this.http.get(url);
  }


}
