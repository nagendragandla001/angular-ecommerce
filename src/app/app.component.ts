import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'angular-ecommerce';
}
