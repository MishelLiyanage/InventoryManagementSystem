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

  constructor(
    private authService: AuthService,
    private configService:LayoutConfigService, 
    private router: Router) {}

    ngAfterViewInit(): void {
    this.configService.setConfig(new LayoutConfig(false,false,false))
  }  

  login() {
    console.log(this.username + " " + this.password);
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        const { id, firstname, role } = response.user;
        console.log('user details: ', response.user);

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
