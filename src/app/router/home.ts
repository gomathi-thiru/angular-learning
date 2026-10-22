import { Component, inject } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Home Page</h2>
    <p>Welcome to the Angular Routing Example!</p>

    <a routerLink="/about">Go to About</a>
    <button (click)="goToAbout()">Go to About</button>
    
    <br><br>
    // queryParams	Passes additional URL information & :id Passes a value through the URL //

    <a [routerLink]="['/user', 101]" [queryParams]="{ role: 'admin' }">View Admin User</a>  
    <a routerLink="/user/123">User 123</a>
  `
})
export class HomeComponent {
    private router = inject(Router);
// Navigate programmatically
    goToAbout() {
    this.router.navigate(['/about']); // Router.navigate()	Navigates through TypeScript
}
}
