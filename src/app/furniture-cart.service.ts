import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Furniture } from './furniture-list/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureCartService {

  constructor() { }

  private privCartList: Furniture[] = [];

  cartList: BehaviorSubject<Furniture[]> = new BehaviorSubject([]);

  addToCart(furniture: Furniture) {
    let item: Furniture = this.privCartList.find((v1) => v1.name == furniture.name && v1.type == furniture.type);
    if (!item) {
      this.privCartList.push({ ... furniture});
    } else {
      item.quantity += furniture.quantity;
    }
    console.log(this.privCartList);
    this.cartList.next(this.privCartList);
  }

}
