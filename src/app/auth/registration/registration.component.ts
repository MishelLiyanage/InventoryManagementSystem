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

  constructor(private http: HttpClient,
    private configService:LayoutConfigService, 
    private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.configService.setConfig(new LayoutConfig(false, false, false))
  }  

  onSubmit(userForm: NgForm) {
    console.log(this.userModel)
    if (userForm.valid) {
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


