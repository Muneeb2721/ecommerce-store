import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset, faShield, faTrash, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  faDelete = faTrash;
  faTrophy = faTrophy;
  faShield = faShield;
  faTruck = faTruck
  faHeadset = faHeadset;
}
