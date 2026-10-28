import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.sevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
    private fb = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

    errorMessage = '';
    isLoading = false; // initially login false

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
        this.validDob
      ]
    ],

    gender: [
      '',
      Validators.required
    ]
  });

// provide convenient access to individual controls in form
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

  private validDob(control: AbstractControl) {
  const dob = new Date(control.value);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  if (!control.value) {
    return null;
  }

  if (dob > today) {
    return { invalidDob: true };
  }

  return null;
}

  onLogin(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;  // indicate login request currently running

    this.authService.login(this.loginForm.getRawValue()).subscribe({ //allows to receive the value(t/f) emitted by observable->is a way to handle data that arrives over time async
      next: (success) => { // receives the value by observable
        this.isLoading = false; // before the condition. allows the login button to become enabled again

        if (success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage =
            'Invalid username, password, DOB, or gender.';
        }
      },

      error: () => {
        this.isLoading = false; // When the request completes
        this.errorMessage =
          'Unable to load user details. Please try again.';
      }
    });
  }
}