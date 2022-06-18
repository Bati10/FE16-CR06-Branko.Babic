import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { products } from '../products';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';



@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = products;



  constructor(private route: ActivatedRoute,private cartService: CartService) { }
  addToCart(obj: IProducts) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(obj);
  }
  ngOnInit(): void {
    
  
  }

}
