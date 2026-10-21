import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username = 'Gomathi';

  getUsername(): string {
    return this.username;
  }
}

@Injectable()
export class UserService2 {
  getMessage(): string {
    return 'Hello from UserService!';
  }
}
@Injectable()
export class AdminService {
  getMessage(): string {
    return 'Hello from AdminService!';
  }
}