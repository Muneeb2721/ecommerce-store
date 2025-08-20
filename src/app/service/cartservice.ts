import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  title: string;
  imageUrl: string;
  detailUrl: string;
  subtitle: string;
  discount: string;
  discountAmount: string;
  actualAmount: string;
}

@Injectable({
  providedIn: 'root'
})

export class Cartservice {
  cartItems = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItems.asObservable();

  // Add product
  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, product]);
  }

} // cartservice class terminator
