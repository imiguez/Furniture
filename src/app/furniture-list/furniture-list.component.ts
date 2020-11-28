import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.scss']
})
export class FurnitureListComponent implements OnInit {

  furniture = {
    "image" : "assets/img/East Lake 1 Drawer.jpg",
    "name" : "East Lake 1 Drawer",
    "type" : "Nightstand",
    "price" : 499.99,
    "stock" : 25
  }

  constructor() { }

  ngOnInit(): void {
  }

}
