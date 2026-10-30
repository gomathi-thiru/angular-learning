import { Component, inject } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formArray.html',
  styleUrl: './formArray.css'
})

export class DynamicForm {

  private fb = inject(FormBuilder);

  registrationForm = this.fb.group({

    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],

    phoneNumbers: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  // get the phone number FormArray
  get phoneNumbers(): FormArray {
    return this.registrationForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.fb.control('', Validators.required)
    );
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}