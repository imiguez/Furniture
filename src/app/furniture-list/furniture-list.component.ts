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
    },
    {
      "name" : "East Lake 1 Drawer",
      "type" : "Nightstand",
      "price" : 499.99,
      "stock" : 25,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : false,
    },
    {
      "name" : "East Lake 1 Drawer",
      "type" : "Nightstand",
      "price" : 499.99,
      "stock" : 25,
      "image" : "assets/img/East Lake 1 Drawer.jpg",
      "offer" : true,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
