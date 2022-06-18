import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: IProducts[] = [];
  product: number = 0;
  service:number =0;
  total:number = 0;
  amount: number = 40;
  discount: number = 0;
  damount: number = 0;


  checkoutForm = new FormGroup({
    name: new FormControl(''),
    lname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    

   });

   
   
  constructor(private cartService: CartService, private fb: FormBuilder) { }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }


  
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.product = this.cartService.sumproduct();
    this.service = this .cartService.sumservice();
    this.total = this.cartService.sumtotal();
    this.discount = this.cartService.sumdiscount();
    this.damount = this.cartService.dAmount();
  }

}
