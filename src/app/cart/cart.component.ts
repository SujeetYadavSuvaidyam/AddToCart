import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ICart } from '../interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cart: CartService) { }
  products: ICart[] = [];
  ngOnInit() {
    this.cart.getProduct().subscribe(data => {
      this.products = data
      console.log(data)
    })
  }
  RemoveProduct(index: number) {
    this.cart.removeproduct(index)
  }
}
