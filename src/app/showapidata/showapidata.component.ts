import { Component } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { ICart } from '../interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-showapidata',
  templateUrl: './showapidata.component.html',
  styleUrls: ['./showapidata.component.css']
})
export class ShowapidataComponent {
  getapidata: ICart[] = [];
  Toggle: any;
  addItemCount: number = 0
  constructor(private _api: ApiserviceService, private cart: CartService) {
  }
  ngOnInit() {
    this.getData()
    this.totalItem()
  }

  getData() {
    this._api.getAllProducts().subscribe(data => {
      this.getapidata = data
      console.log(data)
    })
  }
  addcart(item: ICart) {
    this.cart.addTocart(item);
  }
  totalItem() {
    this.cart.getProduct().subscribe(data => {
      this.addItemCount = data.length
    })
  }
  // addTocart(index: number) {
  //   this.showcart.push({ ...this.getapidata[index], quantity: 1 });
  //   // console.log(this.showcart)
  // }

  // removeproduct(id: number) {
  //   this.showcart.splice(this.showcart.findIndex(f => f.id === id), 1)
  //   console.log(this.showcart)
  // }
  // checkCartStatus(id: number) {
  //   return this.showcart.find(f => f.id === id) ? true : false
  // }

  toggle() {
    this.Toggle = !this.Toggle
    // console.log(this.Toggle)
  }
}
