import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the requested page does not exist.</p>

    <a routerLink="/">Return to Home</a>
  `
})
export class NotFoundComponent {}