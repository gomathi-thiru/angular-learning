import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-list',
  template: '', // Base template is not inherited
  host: {
    '(keydown)': 'handleKey($event)'
  }
})
export class BaseListComponent {
  // Inheritable Signal Input
  items = input.required<string[]>();

  handleKey(event: KeyboardEvent) {
    console.log('Key pressed in base logic:', event.key);
  }

  ngOnInit() {
    console.log('Base component initialized');
  }
}