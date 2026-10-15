import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  template: `
    <div class="modal">
      <h2>Alert</h2>

      <p>{{ message() }}</p>

      <button (click)="onClose.emit()">
        Close
      </button>
    </div>
  `,
  styles: [`
    .modal {
      padding: 20px;
      margin-top: 20px;
      border: 2px solid green;
      background-color: #df101e;
      border-radius: 8px;
    }

    button {
      padding: 8px 16px;
      cursor: pointer;
    }
  `]
})
export class AlertModalComponent {
  message = input<string>('');

  onClose = output<void>();
}