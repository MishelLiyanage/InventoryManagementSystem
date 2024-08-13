import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userModel = new User('', '', '', '', '', '', '');
}
