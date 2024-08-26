import { afterNextRender, Component } from '@angular/core';
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
  loginError: string = '';
  isLoggingIn = false;

  failedAttempts: number = 0;
  maxFailedAttempts: number = 3;
  lockoutTime: number = 10000; // 30 seconds lockout period
  isLocked: boolean = false;
  lockoutTimer: any;

  constructor(
    private authService: AuthService,
    private configService:LayoutConfigService, 
    private router: Router) {
      afterNextRender(()=>{
        localStorage.clear()
      })
    }


  ngAfterViewInit(): void {
    
    this.configService.setConfig(new LayoutConfig(false,false,false,false))
   
  }  

  validateForm(): boolean {
    let isValid = true;

    // Reset error messages
    this.usernameError = '';
    this.passwordError = '';
    this.loginError = '';

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

    this.isLoggingIn = true
    
    if (this.isLocked) {
      this.loginError = 'Account is locked due to multiple failed login attempts. Please try again later.';
      return;
    }

    // Run validations first
    if (!this.validateForm()) {
      this.isLoggingIn = false
      return;
    }

    console.log(this.username + " " + this.password);
    this.authService.login(this.username, this.password).subscribe(response => {
    
      if (response.success) {
        const { id, firstname, role } = response.user;

       
        console.log('user details: ', response.user);

        this.authService.setUserId(id);
        this.authService.setfirstname(firstname);

        // Reset failed attempts on successful login
        this.failedAttempts = 0;

        this.isLoggingIn=false

         // Redirect based on the role
        if (role === 'admin') {
          console.log('I am the admin');
          this.router.navigate(['/dashboard/admin-dashboard'])
          
        } else if (role === 'user') {
          console.log('I am the user');
          this.router.navigate(['/dashboard/customer-dashboard'])
        }

        
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("role", role);
      } else {
        this.handleFailedLogin(response.message);
      }
    });
  }

  handleFailedLogin(errorMessage: string) {
    this.failedAttempts++;
    this.loginError = errorMessage;

    if (this.failedAttempts >= this.maxFailedAttempts) {
      this.isLocked = true;
      this.loginError = 'Too many failed attempts. Account is locked. Please try again in 30 seconds.';
      
      // Start lockout timer
      this.lockoutTimer = setTimeout(() => {
        this.isLocked = false;
        this.failedAttempts = 0;
      }, this.lockoutTime);
    }
  }

  navigateToSignUp(){
    this.router.navigate(['/auth/signup']);
  }
}
