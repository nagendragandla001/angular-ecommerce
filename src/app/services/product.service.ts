import { Injectable, signal } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  async getProducts() {
    // Simulate an API call
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();

    return data;
  }
}
