import { Component, input } from '@angular/core';

@Component({
  selector: 'app-my',
  standalone: true,
  template: `
    <h2>{{ userTitle() }}</h2>
    <p>This is an Angular Element!</p>
  `
})
export class MyComponent {
  userTitle = input<string>('');
}