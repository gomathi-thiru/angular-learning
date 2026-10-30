import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.html'
})
export class TemplateDrivenForm {

  name = '';
  email = '';

  onSubmit() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
  }
}