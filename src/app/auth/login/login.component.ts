import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutConfigService } from '../../services/layout-config.service';
import { LayoutConfig } from '../../models/config/layout-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  usernameError: string = '';
  passwordError: string = '';

  constructor(
    private authService: AuthService,
    private configService:LayoutConfigService, 
    private router: Router) {}

  ngAfterViewInit(): void {
    this.configService.setConfig(new LayoutConfig(false,false,false))
  }  

  validateForm(): boolean {
    let isValid = true;

    // Reset error messages
    this.usernameError = '';
    this.passwordError = '';

    // Username validation
    if (!this.username) {
      this.usernameError = 'Username is required';
      isValid = false;
    } else if (this.username.length < 4 || this.username.length > 10) {
      this.usernameError = 'Username must be between 4 and 10 characters';
      isValid = false;
    }

    // Password validation
    if (!this.password) {
      this.passwordError = 'Password is required';
      isValid = false;
    } else if (this.password.length < 5 || this.password.length > 10) {
      this.passwordError = 'Password must be between 5 and 10 characters';
      isValid = false;
    }

    return isValid;
  }

  login() {
    // Run validations first
    if (!this.validateForm()) {
      return;
    }

    console.log(this.username + " " + this.password);
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        const { id, firstname, role } = response.user;
        console.log('user details: ', response.user);

        this.authService.setUserId(id);
        this.authService.setfirstname(firstname);

         // Redirect based on the role
        if (role === 'admin') {
          console.log('I am the admin');
          this.router.navigate(['/dashboard/admin-dashboard'])
        } else if (role === 'user') {
          console.log('I am the user');
          this.router.navigate(['/dashboard/customer-dashboard'])
        }
      } else {
        alert(response.message); // Handle invalid login
      }
    });
  }

  navigateToSignUp(){
    this.router.navigate(['/auth/signup']);
  }
}
