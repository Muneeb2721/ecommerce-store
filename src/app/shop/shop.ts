import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faGridHorizontal, faHeadset, faList, faShieldAlt, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})

export class Shop {
  faFilter = faFilter;
  faList = faList;
  faGrid = faGridHorizontal;
  faShare = faShare;
  faCompare = faCodeCompare;
  faHeart = faHeart;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faLineChart = faMinus;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCircle = faCircle;
  faShield = faShieldAlt;
  faTrophy = faTrophy;
  faTruck = faTruck
  faHeadset = faHeadset;

  constructor(private route: Router) {

  }
  // Array to track overlays for product cards 2-8 (index 0 = card 2, index 6 = card 8)
  showOverlays: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
 

   showOverlay(idx: number, isVisible: boolean) {
  this.showOverlays = this.showOverlays.map((_, i) => i === idx ? isVisible : false);
}

  show() {
    this.route.navigate(['cart-page']);
  }

  productDetail() {
    this.route.navigate(['single-product-page']);
  }

  redirectToComparison() {
    this.route.navigate(['product-comparison-page']);
  }

  redirectToHome() {
    this.route.navigate(['home-page']);
  }

  redirectToShop() {
    this.route.navigate(['shop-page']);
  }
}
