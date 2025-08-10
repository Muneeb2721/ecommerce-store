import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart, faHamburger, faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons';

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
  fahamburger = faHamburger

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

  showMobileMenu() {
    const menu=document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('visible');
    }
  }
  
  hideMobileMenu() {
    const menu=document.getElementById('mobile-menu');
    if (menu) {
      document.body.classList.toggle('invisible');
    }
  }
}
