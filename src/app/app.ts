import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { CarService } from './car.service';
import { User } from './user/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  carService = inject(CarService);
}