import { Component, OnInit } from '@angular/core';
import { FurnitureCartService } from '../furniture-cart.service';
import { Furniture } from './furniture';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.scss']
})
export class FurnitureListComponent implements OnInit {

  furnitures: Furniture[] = [
    {
      "name" : "East Lake 1 Drawer",
      "type" : "Nightstand",
      "price" : 499.99,
      "stock" : 25,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : true,
      "quantity" : 0,
    },
    {
      "name" : "PEPE",
      "type" : "Nightstand",
      "price" : 499.99,
      "stock" : 3,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : false,
      "quantity" : 0,
    },
    {
      "name" : "East Lake 1 Drawer",
      "type" : "PEPE",
      "price" : 499.99,
      "stock" : 0,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : true,
      "quantity" : 0,
    },
  ];


  constructor(private cart: FurnitureCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(furniture): void {
    this.cart.addToCart(furniture);
    furniture.stock -= furniture.quantity;
    furniture.quantity = 0;
  }

  isMaxReached(event) {
    if (event)
    alert("No hay mas stock");
  }

}
