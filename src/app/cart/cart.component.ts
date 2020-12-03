import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureCartService } from '../furniture-cart.service';
import { Furniture } from '../furniture-list/furniture';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartList$: Observable<Furniture[]>;

  constructor(private cart: FurnitureCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }


  ngOnInit(): void {
  }

}
