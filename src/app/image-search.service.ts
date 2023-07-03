import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  private apiKey = 'AIzaSyDX4YE3aXF-QZs_7Hgms75-SU0f_FyZiCU';
  private cx = '411888bfb85444023';
  private apiUrl = `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.cx}&searchType=image&q=`;

  constructor(private http: HttpClient) { }

  searchImages(query: string) {
    const url = this.apiUrl + encodeURIComponent(query) + '&num=1';
    return this.http.get(url);
  }
}
