import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  template: `
    <h2>User Dashboard</h2>
    <p>Welcome User</p>
  `,
  styles: [`
    :host {
      display: block;
      padding: 20px;
      background-color: lightgreen;
      border: 2px solid green;
    }
  `]
})
export class UserDashboard {}