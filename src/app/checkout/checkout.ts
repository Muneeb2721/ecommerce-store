import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset, faShield, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  faHeadset = faHeadset;
  faTruck = faTruck;
  faShield = faShield;  
  faTrophy = faTrophy;
}
