import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userModel = new User('', '', '', '', '', '', '');
}
