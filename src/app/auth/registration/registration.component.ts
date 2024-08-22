import { Component } from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutConfigService } from '../../services/layout-config.service';
import { LayoutConfig } from '../../models/config/layout-config';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] // Fixed the typo: 'styleUrl' -> 'styleUrls'
})
export class RegistrationComponent {
  userModel = new User('', '', '', '', '', '', '');
  validationErrors: any = {};

  constructor(
    private http: HttpClient,
    private configService: LayoutConfigService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.configService.setConfig(new LayoutConfig(false, false, false));
  }

  validateForm(): Promise<boolean> {
    return new Promise((resolve) => {
      let isValid = true;

      // Reset error messages
      this.validationErrors = {};

      // Trim input values
      this.userModel.firstname = this.userModel.firstname.trim();
      this.userModel.lastname = this.userModel.lastname.trim();
      this.userModel.username = this.userModel.username.trim();
      this.userModel.email = this.userModel.email.trim();

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
      } else {
        // Check if the username already exists in the account table
        this.authService.checkUsernameExists(this.userModel.username).subscribe(
          (exists: boolean) => {
            if (exists) {
              this.validationErrors.username = 'Username already exists';
              isValid = false;
            }

            // Continue with the remaining validation after the async call
            this.finalizeValidation(isValid, resolve);
          },
          (error: any) => {
            console.error('Error checking username:', error);
            resolve(false);
          }
        );

        return; // Exit to wait for the async username check to complete
      }

      // Perform other validations synchronously if the username is valid
      this.finalizeValidation(isValid, resolve);
    });
  }

  finalizeValidation(isValid: boolean, resolve: (value: boolean) => void) {
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
    } else if (!/^\d{10}$/.test(this.userModel.telno)) {
      this.validationErrors.telno = 'Contact number must be exactly 10 digits';
      isValid = false;
    }

    resolve(isValid);
  }

  async onSubmit(userForm: NgForm) {
    console.log(this.userModel);
    const isValid = await this.validateForm(); // Wait for the validation to complete

    if (isValid) {
      this.http
        .post('http://localhost/ims-backend/register.php', this.userModel, {
          headers: { 'Content-Type': 'application/json' }
        })
        .subscribe(
          (response) => {
            console.log(response);
            userForm.resetForm();
            this.userModel = new User('', '', '', '', '', '', '');
          },
          (error) => {
            console.error('Error!', error);
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
