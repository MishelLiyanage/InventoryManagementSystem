import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstname: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.firstname = this.authService.getfirstname();
    console.log("Logged in user ID:", this.firstname);
  }

  logout() {
    this.authService.clearUserdetails();
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
