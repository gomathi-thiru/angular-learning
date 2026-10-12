import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form',
  imports: [FormsModule],
  templateUrl: './form.html'
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';
}