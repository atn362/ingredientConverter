import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {
  private recipeItems: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  getRecipeItems() {
    return this.recipeItems.asObservable();
  }

  addItem(item: string) {
    const items = this.recipeItems.getValue();
    items.push(item);
    this.recipeItems.next(items);
    console.log(this.recipeItems)
  }
}
