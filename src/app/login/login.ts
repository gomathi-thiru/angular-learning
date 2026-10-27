import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
    private fb = inject(FormBuilder);
    errorMessage = '';
    isLoading = false;

    loginForm = this.fb.nonNullable.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9_]+$/)
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],

    dob: [
      '',
      [
        Validators.required,
      ]
    ],

    gender: [
      '',
      Validators.required
    ]
  });

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  get dob() {
    return this.loginForm.controls.dob;
  }

  get gender() {
    return this.loginForm.controls.gender;
  }
}