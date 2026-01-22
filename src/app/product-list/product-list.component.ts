import { Component, inject, signal } from '@angular/core';
import { Product } from '../model/product';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [PrimaryButtonComponent],
  template: `<div class="grid grid-cols-4 gap-4 p-4 min-h-screen">
    @for (product of products(); track product.id) {
      <div class="p-4 rounded-lg shadow-md relative">
        <div class="flex justify-center">
          <img
            [src]="product.thumbnail"
            [alt]="product.title"
            class="h-[100px] w-[100px] object-contain mb-4 rounded"
          />
        </div>
        <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-gray-800 font-bold mb-2">\${{ product.price }}</p>
        <p
          class="text-sm absolute top-2 right-2"
          [class]="product.stock > 0 ? 'text-green-500' : 'text-red-500'"
        >
          {{ product.stock }} left
        </p>
        <div class="flex text-right">
          <app-primary-button
            class="mt-4 w-full"
            label="Add to Cart"
            (btnClicked)="onAddToCart(product)"
          />
        </div>
      </div>
    }
  </div>`,
  styles: ``,
})
export class ProductListComponent {
  cartService = inject(CartService);
  productService = inject(ProductService);

  products = signal<Product[]>([]);

  async ngOnInit() {
    this.products.set(
      await this.productService
        .getProducts()
        .then((data: any) => data.products),
    );
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
