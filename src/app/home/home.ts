import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faShare = faShare;
  faCompare = faCodeCompare;
  faHeart = faHeart;
  faArrowRight = faArrowRight;
  faArrowLeft  = faArrowLeft;
  faLineChart = faMinus;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCircle = faCircle;

  // Array to track overlays for product cards 2-8 (index 0 = card 2, index 6 = card 8)
  showOverlays: boolean[] = [false, false, false, false, false, false, false, false, false];

  constructor(public route: Router) { }

  showOverlay(idx: number, event: Event) {
      event.stopPropagation(); // Prevent document click from firing
      this.showOverlays = this.showOverlays.map((_, i) => i === idx);
    }
  
    // Hide all overlays when clicking outside
    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event) {
      this.showOverlays = this.showOverlays.map(() => false);
    }

  show(){
    this.route.navigate(['cart-page'])
  }

  redirectToCart(){
    this.route.navigate(['cart-page']);
  }

  redirectToComparison(){
    this.route.navigate(['product-comparison-page']);
  }

  productDetail(){
    this.route.navigate(['single-product-page']);
  }

  redirectToShop(){
    this.route.navigate(['shop-page']);
  }
}