import { Component, input } from '@angular/core';
import { BaseListComponent } from './child';

@Component({
  selector: 'app-custom-list',
  template: `
    <ul>
      @for (item of items(); track item) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
  host: {
    '(click)': 'handleClick()'
  }
})
export class CustomListComponent extends BaseListComponent {
  // CustomListComponent inherits 'items' input and 'keydown' host listener
  // it adds its own unique input here:
  disabled = input<boolean>(false);

  handleClick() {
    console.log('Child clicked');
  }

  // overriding a lifecycle hook
  override ngOnInit() {
    super.ngOnInit(); // explicitly invoke parent logic
    console.log('Child component initialized');
  }
}
