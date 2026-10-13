import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './selector.html',
  styleUrl: './selector.css'
})
export class Student {
  name = 'Gomathi';
  course = 'Angular';
}