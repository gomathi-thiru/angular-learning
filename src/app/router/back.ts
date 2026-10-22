import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  standalone: true,
  template: `
    <button (click)="goBack()">Go Back</button>
  `
})
export class BackComponent {
  private location = inject(Location);

  goBack() {
    this.location.back();   // Location.back()	Returns to the previous page
  }
}