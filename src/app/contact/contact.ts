import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faHeadset, faLocation, faPhone, faShieldAlt, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  faAddress = faLocation;
  faCall = faPhone;
  faTime = faClock;
  faHeadset = faHeadset;
    faTruck = faTruck;
    faShield = faShieldAlt;  
    faTrophy = faTrophy;
}
