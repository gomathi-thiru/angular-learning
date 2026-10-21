import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product.details.html'
})
export class ProductDetails {
  productName = input<string>('Unknown Product');
  price = input<number>(0);
}