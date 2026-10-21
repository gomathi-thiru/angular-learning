import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user.details.html'
})
export class UserDetails {
  username = input.required<string>();
  age = input.required<number>();
}