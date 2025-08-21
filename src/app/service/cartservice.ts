import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Product {
  title: string;
  imageUrl: string;
  detailUrl: string;
  subtitle: string;
  discount: string;
  discountAmount: string;
  actualAmount: string;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})

export class Cartservice {
  cartItems = new BehaviorSubject<Product[]>(this.loadCartFromStorage()); 
  cartItems$ = this.cartItems.asObservable();

  addToCart(product: Product) {
    const currentItems = this.cartItems.value;
    const updated = [...currentItems, product];
    this.cartItems.next(updated);
    this.saveCartToStorage(updated);
  }

  removeFromCart(productTitle: string) {
    const updated = this.cartItems.value.filter(p => p.title !== productTitle);
    this.cartItems.next(updated);
  }

  getCartCount(): Observable<number> {
  return this.cartItems.asObservable().pipe(
    map(items => items.reduce((count, item) => count + (item.quantity || 1), 0))
  );
}

  // --- Helpers ---
  private saveCartToStorage(items: Product[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  private loadCartFromStorage(): Product[] {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  }

} // cartservice class terminator
