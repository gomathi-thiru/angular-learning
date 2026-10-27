import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  username: string;
  password: string;
  dob: string;
  gender: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
  dob: string;
  gender: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  private readonly usersUrl = '/user.json';
}