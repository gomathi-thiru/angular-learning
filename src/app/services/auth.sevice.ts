import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  private readonly jsonUsers = '/user.json';
  private readonly sessionKey = 'loggedInUser';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonUsers);
  }

  login(credentials: LoginCredentials): Observable<boolean> {
    return this.getUsers().pipe(
      map(users => {
        const matchedUser = users.find(user =>
          user.username === credentials.username.trim() &&
          user.password === credentials.password &&
          user.dob === credentials.dob &&
          user.gender === credentials.gender
        );

        if (matchedUser) {
          const { password, ...userData } = matchedUser;  //extract the password separate and contains remain data will stored in userdata(username,age,gender)

          sessionStorage.setItem(
            this.sessionKey,
            JSON.stringify(userData)
          );

          return true;
        }

        return false;
      })
    );
  }

  // isAuthenticated(): boolean {
  //   return sessionStorage.getItem(this.sessionKey) !== null;
  // }

  getLoggedInUser() {
    const user = sessionStorage.getItem(this.sessionKey);

    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    sessionStorage.removeItem(this.sessionKey);
  }
}