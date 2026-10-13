import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>User: {{ username() }}</h3>
      <p>Role: {{ role() }}</p>
    </div>
  `,
  styles: `
    .card { border: 1px solid #ccc; padding: 16px; margin: 8px 0; border-radius: 4px; }
  `
})
export class UserCardComponent {
  // required i/p with a custom transform function to uppercase the text
  username = input.required<string, string>({
    transform: (value: string) => value.trim().toUpperCase()
  });

  // optional i/p with a default fallback value
  role = input<string>('Guest');
}