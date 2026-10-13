import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button (click)="sendData()">Click to Send Data</button>
  `
})
export class ChildComponent {
  onDataSent = output<string>();

  sendData() {
    this.onDataSent.emit('Hi from the Child Component!');
  }
}