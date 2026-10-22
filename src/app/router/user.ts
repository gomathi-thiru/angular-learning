import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h2>User Details</h2>
    <p>User ID: {{ user_id }}</p>
    <p>Role: {{ role }}</p>
  `
})
export class UserComponent {
  private route = inject(ActivatedRoute);

  userId = this.route.snapshot.paramMap.get('id');
  user_id = this.route.snapshot.url[1]?.path;
  role = this.route.snapshot.queryParamMap.get('role');
}