import { Component, inject, Injector, viewChild, ViewContainerRef, inputBinding, outputBinding, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { CarService } from './car.service';
import { User } from './user/form';
import { LifecycleComponent } from './lifecycle/lifecycle';
import { Student } from './selector/selector';
import { UserCardComponent } from './input/input';
import { ChildComponent } from './input/output/output';
import { HostComponent } from './host_element/host';
import { CustomListComponent } from './inherit/parent';
import { NgClass, NgStyle, NgComponentOutlet } from '@angular/common';
import { AdminDashboard } from './dynamic-comp-render/admindashboard';
import { UserDashboard } from './dynamic-comp-render/userdashboard';
import { AlertModalComponent } from './dynamic-comp-render/alertmodel';
import { MyComponent } from './custom_element/mycomponent';
import { createCustomElement } from '@angular/elements';
import { DashboardComponent } from '../templates/bindvalue';
import { DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { ReversePipe } from './pipe/custom.pipe';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { HighlightDirective } from './attr_directive/custom';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, User, LifecycleComponent, Student, UserCardComponent, 
    ChildComponent, HostComponent, CustomListComponent, NgComponentOutlet, AdminDashboard, UserDashboard, AlertModalComponent, DashboardComponent,
    UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CurrencyPipe, ReversePipe, FormsModule, NgTemplateOutlet, NgClass, NgStyle, HighlightDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // constructor(private injector: Injector) {
  //   // Convert the Angular component into a custom element.
  //   const MyCustomElement = createCustomElement(MyComponent, {
  //     injector: this.injector
  //   });

  //   // Register the custom element only once.
  //   if (!customElements.get('my-custom-element')) {
  //     customElements.define('my-custom-element', MyCustomElement);
  //   }
  // }
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
//templete render
  isAdmin = true;

  getDashboardComponent() {
    return this.isAdmin ? AdminDashboard : UserDashboard;
  }
//class based render
  container = viewChild.required('modalContainer', {
    read: ViewContainerRef
  });

  showAlert() {
    // Remove any previously rendered modal
    this.container().clear();

    // Create the modal dynamically
    this.container().createComponent(AlertModalComponent, {
      bindings: [
        inputBinding(
          'message',
          () => 'Operation successful!'
        ),

        outputBinding('onClose', () => {
          this.container().clear();
        })
      ]
    });
  }
// pipe
  name = 'angular framework';
  message = 'HELLO WORLD';
  today = new Date();
  price = 1500;

  msg = 'Angular';
// event listner
  msg1 = 'Welcome to Angular!';

  showMessage() {
    this.msg1 = 'Button clicked successfully!';
  }
// input event
  username = '';

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }

  // multiple event listner

  a = 'Perform an action';

  onClick(): void {
    this.a = 'Button clicked!';
    console.log(this.a);
  }

  onMouseOver(): void {
    this.a = 'Mouse moved over the button!';
    console.log(this.a);
  }

  onKeyUp(): void {
    this.a = 'Keyboard key released!';
    console.log(this.a);
  }

  // confrol flow (if)
  isLoggedIn = true;

  // for ex
  fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  // switch
   role = 'admin';

  // two way binding(model to view)
  uname: string = 'Gomathi';

  updateName() {
    this.uname = 'Angular';
  }
  // view to model
  user_name: string = '';

  // fragment & ng container
  displayMessage = false;

  u_name = 'Gomathi';
  students = ['Gomathi', 'Priya'];

  // variable in template

  employee = 'gomathi';
  empAge = 26;
 // attribure directive
  isActive = true;
  textColor = 'blue';
  fontSize = '20px';
}