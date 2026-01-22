import { Injectable, signal } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update((cart) => [...cart, product]);
  }

  removeFromCart(productId: number) {
    this.cart.update((cart) => cart.filter((item) => item.id !== productId));
  }
}
