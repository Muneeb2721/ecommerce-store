import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FontAwesomeModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-store');

  faCoffee = faCoffee;
  constructor (private route: Router) {
  }

  isHomeRoute(): boolean {
    return this.route.url === '/home-page';
  }

  isHeaderRoute(): boolean {
    return this.route.url === '/header-page';
  }

  isShopRoute(): boolean {
    return this.route.url === '/shop-page';
  }

  isSingleProductRoute(): boolean {
    return this.route.url === '/single-product-page';
  }
  
}