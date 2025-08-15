import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faMultiply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart-sidebar.html',
  styleUrl: './cart-sidebar.css'
})
export class CartSidebar {
  faCross = faMultiply;
  faCircleXmark = faCircleXmark 

  constructor(private route:Router){}
  removeCartSidebar() {
    const sidebar= document.getElementById('cart-sidebar');
    if(sidebar){
    sidebar.classList.add('hidden');}
  }

redirectToCart(){
  this.route.navigate(['cart-page'])
}
redirectToCheckout(){
  this.route.navigate(['checkout-page'])
}
redirectToComparison(){
  this.route.navigate(['comparison-page'])
}
}
