import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  faUser = faUser;
  faSearch = faSearch; 
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  constructor(private route: Router) {

  }
  
  homePage() {
    this.route.navigate(['home-page']);
  }

  shopPage() {
    this.route.navigate(['shop-page']);
  }

  contactPage() {
    this.route.navigate(['contact-page']);
  }

  redirectToCart() {
    this.route.navigate(['cart-page']);
  }
}
