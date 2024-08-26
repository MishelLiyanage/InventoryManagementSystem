import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutConfigService } from '../../services/layout-config.service';
import { LayoutConfig } from '../../models/config/layout-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstname: string | null = '';

  constructor(private authService: AuthService, 
    private router: Router,
    private layoutService: LayoutConfigService  
  ) {}

  ngOnInit() {
    this.firstname = this.authService.getfirstname();
    console.log("Logged in user ID:", this.firstname);
  }

  logout() {
    this.authService.clearUserdetails();
    localStorage.clear()
    this.layoutService.setConfig(new LayoutConfig(false, false, false, false))
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
