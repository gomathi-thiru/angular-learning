import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-compute',
  standalone: true,
  templateUrl: './compute.html'
})
export class Compute {
  price = input<number>(0);
  quantity = input<number>(1);

  totalPrice = computed(() => this.price() * this.quantity());
}