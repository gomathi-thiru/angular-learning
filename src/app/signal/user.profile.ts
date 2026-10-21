import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user.profile.html'
})
export class UserProfile {
  username = input<string>('Guest');
}