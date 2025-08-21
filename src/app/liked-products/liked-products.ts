import { Component, EventEmitter, Output } from '@angular/core';
import { faCircleXmark, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { Cartservice, Product } from '../service/cartservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-liked-products',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './liked-products.html',
  styleUrls: ['./liked-products.css']
})
export class LikedProducts {

  @Output() closeSidebar = new EventEmitter<void>();
    faCross = faMultiply;
    faCircleXmark = faCircleXmark;
  
    cartItems: Product[] = [];
    
    constructor(private route: Router, private cartService: Cartservice) {
    
      this.cartService.cartItems$.subscribe(items => {
    
        this.cartItems = items;
        
      });
    }
  
    remove(productTitle: string) {
      this.cartService.removeFromCart(productTitle);
    }
  
    removeCartSidebar() {
      this.closeSidebar.emit();
    }
  
    redirectToCart() {
      this.route.navigate(['cart-page']);
      this.closeSidebar.emit();  // ✅ This will close sidebar after redirect
  
    }
    redirectToCheckout() {
      this.route.navigate(['checkout-page']);
      this.closeSidebar.emit();  // ✅ This will close sidebar after redirect 
    }
    redirectToComparison() {
      this.route.navigate(['comparison-page']);
      this.closeSidebar.emit();  // ✅ This will close sidebar after redirect
    }
}
