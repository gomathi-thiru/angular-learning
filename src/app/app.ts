import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { CarService } from './car.service';
import { User } from './user/form';
import { LifecycleComponent } from './lifecycle/lifecycle';
import { Student } from './selector/selector';
import { UserCardComponent } from './input/input';
import { ChildComponent } from './input/output/output';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, User, LifecycleComponent, Student, UserCardComponent, ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  carService = inject(CarService);

  inputValue = 'Hello Angular';
  showDemo = true;

  changeInput() {
    this.inputValue = 'Updated Angular Value';
  }

  toggleComponent() {
    this.showDemo = !this.showDemo;
  }

  currentEmployee = 'john doe';
  employeeRole = 'Software Engineer';

  handleChildData(message: string) {
    console.log('Received payload:', message); 
    // Output: "Received payload: Hi from the Child Component!"
  }
}