import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

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
  faBars = faBars;

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

  toggleMobileMenu() {
    const menu = document.getElementById('mobilemenu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const menu = document.getElementById('mobilemenu');
    const barsIcon = document.querySelector('.bars');

    if (
      menu &&
      !menu.classList.contains('hidden') && // menu is open
      !menu.contains(target) && // clicked outside menu
      barsIcon && !barsIcon.contains(target) // clicked outside icon
    ) {
      menu.classList.add('hidden'); // close menu
    }
  }
}