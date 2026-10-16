import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  templateUrl: './bindvalue.html',
})
export class DashboardComponent {
  // states managed via angular signals
  username = signal('gomathi');
  imageUrl = signal('https://placehold.co');
  isFormLocked = signal(true);
  
  // Data for attribute binding (e.g., tables or ARIA)
  tableSpan = signal(3);
  alertMessage = signal('Warning: System update scheduled.');
}
