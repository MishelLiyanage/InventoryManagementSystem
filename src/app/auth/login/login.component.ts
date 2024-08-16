import { Component } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log(this.username + " " + this.password);
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        const { id, firstname, role } = response.user;
        console.log('user details: ', response.user);

        // Redirect based on the role
        if (role === 'admin') {
          console.log('I am the admin');
        } else if (role === 'user') {
          console.log('I am the user');
        }
      } else {
        alert(response.message); // Handle invalid login
      }
    });
  }
}
