import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FontAwesomeModule, CommonModule],
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
  
}