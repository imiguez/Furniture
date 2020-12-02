import { Component, OnInit } from '@angular/core';
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
      "name" : "East Lake 1 Drawer",
      "type" : "Nightstand",
      "price" : 499.99,
      "stock" : 3,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : false,
      "quantity" : 0,
    },
    {
      "name" : "East Lake 1 Drawer",
      "type" : "Nightstand",
      "price" : 499.99,
      "stock" : 0,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : true,
      "quantity" : 0,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(furniture: Furniture): void {
    if(furniture.quantity < furniture.stock) {
      furniture.quantity++;
    }
  }

  downQuantity(furniture: Furniture): void {
    if (furniture.quantity > 0){
      furniture.quantity--;
    }
  }
}
