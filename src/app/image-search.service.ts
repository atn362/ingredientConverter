import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { recipe } from './interfaces/recipe';
@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  private apiKey = 'AIzaSyDX4YE3aXF-QZs_7Hgms75-SU0f_FyZiCU';
  private cx = '411888bfb85444023';
  private apiUrl = `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.cx}&searchType=image&q=`;

  constructor(private http: HttpClient) { }


  postIngredientData(title: string, ingredients:string[], method: string) {
    const requestBody: recipe = {
      title: title,
      ingredients: ingredients,
      method: method,

    };

    const url = 'http://localhost:3000/api';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, requestBody, { headers }).subscribe(
      (response) => {
        console.log('POST Request Successful:', response, requestBody);
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
        console.log()
      },
      (error) => {
        console.error('Error making GET Request:', error);
      }
    );
  }

  getIngredientById(id: number) {

    const url = `http://localhost:3000/api/${id}`;

    this.http.get(url).subscribe(
      (response) => {
        console.log('GET Request Successful:', response);
        console.log()
      },
      (error) => {
        console.error('Error making GET Request:', error);
      }
    );
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
