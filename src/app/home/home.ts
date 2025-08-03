import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  toggleOverlay(idx: number) {
    this.showOverlays[idx] = !this.showOverlays[idx];
  }

  show(){
    this.route.navigate(['header-page'])
  }
}