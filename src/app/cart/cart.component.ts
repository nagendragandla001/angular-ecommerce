import { Component, effect, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [OrderSummaryComponent],
  template: ` <div class="p-4 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    <div class="flex flex-col gap-4">
      @for (item of cartService.cart(); track item.id) {
        <div class="p-4 rounded-lg bg-white shadow-xl flex items-center gap-4">
          <img
            [src]="item.thumbnail"
            [alt]="item.title"
            class="h-[80px] w-[80px] object-contain rounded"
          />
          <div>
            <h2 class="text-lg">{{ item.title }}</h2>
            <p class="text-gray-800 font-bold">$ {{ item.price }}</p>
          </div>

          <button
            class="ml-auto bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            (click)="cartService.removeFromCart(item.id)"
          >
            Remove
          </button>
        </div>
      }
    </div>
    <app-order-summary></app-order-summary>
  </div>`,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);

  private router = inject(Router);

  constructor() {
    effect(() => {
      if (this.cartService.cart().length === 0) {
        this.router.navigate(['/']);
      }
    });
  }
}
