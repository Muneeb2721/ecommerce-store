import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset, faShield, faTrash, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';
import { Cartservice, Product } from '../service/cartservice';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartItems: Product[] = [];
    
  constructor(private route: Router,private cartService: Cartservice){
    
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  faDelete = faTrash;
  faTrophy = faTrophy;
  faShield = faShield;
  faTruck = faTruck
  faHeadset = faHeadset;

  redirectToCheckout(){
    this.route.navigate(['checkout-page']);
  }

  redirectToHome(){
    this.route.navigate(['home-page']);
  }
}
