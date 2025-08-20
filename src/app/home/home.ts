import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css' 
})
export class Home implements OnInit {
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

  // productAgent: Observable<string> = new Observable<string>();

  constructor(private route: Router) {}

ngOnInit(): void{
//   this.productAgent = new Observable(observer => {
//     observer.next(this.productData1[0].image);
//   });

//   this.productAgent.subscribe(data => {
//     console.log(data);
//   })
}

  showOverlay(idx: number, isVisible: boolean) {
  this.showOverlays = this.showOverlays.map((_, i) => i === idx ? isVisible : false);
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

  // Carousel Logic
  activeSlide = 0; // index 0, 1, 2 for your 3 images

slides = [
  {
    image: 'assets/imgHome/image20.png',
    title: 'Inner Peace',
    subtitle: '01 Bed Room',
  },
  {
    image: 'assets/imgHome/image15.png',
    title: 'Outer Peace',
    subtitle: '02 Bed Room',
  },
  {
    image: 'assets/imgHome/image11.png',
    title: 'Mental Peace',
    subtitle: '03 Lounge',
  }
];

get currentSlide() {
  return this.slides[this.activeSlide];
}

get nextSlide() {
  return this.slides[(this.activeSlide + 1) % this.slides.length];
}

get prevSlide() {
  return this.slides[(this.activeSlide + 2) % this.slides.length];
}

nextSlideFn() {
  this.activeSlide = (this.activeSlide + 1) % this.slides.length;
}

goToSlide(index: number) {
  this.activeSlide = index;
}

productData1 = [
  {
    image: 'assets/imgHome/image8.png',
    discount: '-30%',
    pName: 'Syltherine',
    viewDetail: ' View Details',
    subtitle: 'Stylish cafe chair',
    pPrice: 'Rp 2,500.000',
    pPriceDiscount: 'Rp 3,500.000'

  },
];
}