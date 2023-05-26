import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent {

  searchTerm!: string;
  imageURL!: string;

  constructor(private http: HttpClient) { }

  searchImage() {
    this.http.get<any>(`https://api.unsplash.com/photos/random?query=${this.searchTerm}&client_id=4zFYJerlFC5LblA06tev6mQ8erJzBWn-WNK0nVnKCaU`)
      .subscribe(response => {
        this.imageURL = response.urls.regular;
      });
  }

}
