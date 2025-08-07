import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMultiply, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {
  faMultiply = faMultiply;
  faTimesCircle = faTimesCircle;
}
