import { Injectable } from '@angular/core';
import { ICart } from './interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productList = new BehaviorSubject<ICart[]>([]);
  Productcart: ICart[] = [];

  getProduct() {
    return this.productList.asObservable()
  }
  setProduct(product: [ICart]) {
    this.Productcart.push(...product);
    this.productList.next(product)
  }
  addTocart(item: ICart) {
    this.Productcart.push(item);
    this.productList.next(this.Productcart)
    console.log(this.Productcart)
  }
  removeproduct(id: number) {
    this.Productcart.splice(this.Productcart.findIndex(f => f.id === id), 1)
    console.log(this.Productcart)
    // this.Productcart.splice(id, 1)

  }
  checkCartStatus(id: number) {
    return this.Productcart.find(f => f.id === id) ? true : false
  }
}
