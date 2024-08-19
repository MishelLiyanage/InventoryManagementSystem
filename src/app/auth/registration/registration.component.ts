import { Component } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutConfigService } from '../../services/layout-config.service';
import { LayoutConfig } from '../../models/config/layout-config';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userModel = new User('', '', '', '', '', '', '');
  validationErrors: any = {};

  constructor(private http: HttpClient,
    private configService:LayoutConfigService, 
    private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.configService.setConfig(new LayoutConfig(false, false, false))
  }  

  validateForm(): boolean {
    this.validationErrors = {};

    // Trim input values
    this.userModel.firstname = this.userModel.firstname.trim();
    this.userModel.lastname = this.userModel.lastname.trim();
    this.userModel.username = this.userModel.username.trim();
    this.userModel.email = this.userModel.email.trim();

    let isValid = true;

    // Validate first name
    if (!this.userModel.firstname) {
      this.validationErrors.firstname = 'First name is required';
      isValid = false;
    } else if (/\d/.test(this.userModel.firstname)) {
      this.validationErrors.firstname = 'First name should not contain numbers';
      isValid = false;
    }

    // Validate last name
    if (!this.userModel.lastname) {
      this.validationErrors.lastname = 'Last name is required';
      isValid = false;
    } else if (/\d/.test(this.userModel.lastname)) {
      this.validationErrors.lastname = 'Last name should not contain numbers';
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.userModel.email) {
      this.validationErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(this.userModel.email)) {
      this.validationErrors.email = 'Email is not valid';
      isValid = false;
    }

    // Validate username
    if (!this.userModel.username) {
      this.validationErrors.username = 'Username is required';
      isValid = false;
    } else if (this.userModel.username.length < 4 || this.userModel.username.length > 10) {
      this.validationErrors.username = 'Username must be between 4 and 10 characters';
      isValid = false;
    }

    // Validate password
    if (!this.userModel.password) {
      this.validationErrors.password = 'Password is required';
      isValid = false;
    } else if (this.userModel.password.length < 5 || this.userModel.password.length > 10) {
      this.validationErrors.password = 'Password must be between 5 and 10 characters';
      isValid = false;
    }

    // Validate city
    if (!this.userModel.city) {
      this.validationErrors.city = 'City is required';
      isValid = false;
    }

    // Validate contact number
    if (!this.userModel.telno) {
      this.validationErrors.telno = 'Contact number is required';
      isValid = false;
    }

    return isValid;
  }

  onSubmit(userForm: NgForm) {
    console.log(this.userModel)
    if (this.validateForm()) {
      this.http.post('http://localhost/ims-backend/register.php', this.userModel, {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe(response => {
        console.log(response);
        userForm.resetForm(); 
        this.userModel = new User('', '', '', '', '', '', '');
      }, error => {
        console.error('Error!', error);
      });
    } else {
      console.error('Form is invalid');
    }
  }

  navigateToLogin(){
    this.router.navigate(['/auth/login']);
  }

}


