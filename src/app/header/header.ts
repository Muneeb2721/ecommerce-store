import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  faUser = faUser;
  faSearch = faSearch; 
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
}
