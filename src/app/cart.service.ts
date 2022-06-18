import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProducts[] = [];
  product: number = 0;
  service:number= 0;
  total: number = 0;
  amount: number = 40;
  discount: number = 0;
  damount: number = 0;
 


  constructor() { }
  addToCart(product: IProducts): void {
    this.items.push(product);
  }
  
  getItems() {
    return this.items;
  }
  
  clearCart() {
    this.items = [];
    return this.items;
  }

  sumproduct() {
     for (let val of this.items) {
      this.product += val.price;
     

    }
    return this.product
}
sumtotal() {
  for (let val of this.items) {
   this.total = this.product + this.service;
  

 }
 return this.total
}

sumservice() {
  for (let val of this.items) {
    this.service = this.product * 0.1;
   

  }
  return this.service
}

sumdiscount(): any {
  for(let val of this.items) {
    if (this.product > this.amount) {
      return this.discount = this.product * 0.15;
    }
}
}

dAmount():any {
for(let val of this.items) {
  return this.damount = this.total - this.discount
}
}
}