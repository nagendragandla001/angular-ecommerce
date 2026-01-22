import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  imports: [],
  template: ` <div class="p-4 mt-6 bg-slate-400 rounded-lg shadow-xl">
    <h2 class="text-xl font-bold mb-4">Order Summary</h2>
    <div class="flex items-center gap-4">
      <span class="font-semibold">Total:</span>
      <span class="text-lg font-bold">\${{ total() }}</span>
    </div>
  </div>`,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  total = computed(() => {
    return this.cartService.cart().reduce((acc, item) => acc + item.price, 0);
  });
}
