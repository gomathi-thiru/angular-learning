import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.sevice';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.getLoggedInUser();

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}