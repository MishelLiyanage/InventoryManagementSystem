import { afterNextRender, Component } from '@angular/core';
import { LayoutConfigService } from '../../services/layout-config.service';

@Component({
  selector: 'app-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrl: './layout-1.component.css'
})
export class Layout1Component {

  config: any

  isLoggedIn:any;
  role:any

  isAdmin =false;
  isCustomer = false;

  initialRendering = true;
  
  constructor(private configService: LayoutConfigService) {
    this.config = configService.config; 

    afterNextRender(() => {
     
      this.isLoggedIn = localStorage.getItem('isLoggedIn');
      this.role = localStorage.getItem('role');
      if(this.role=="admin"){
        this.isAdmin = true
        this.isCustomer = false
      }else if(this.role=="user"){
        this.isAdmin = false
        this.isCustomer = true
      }
  
      console.log(this.isLoggedIn)
      console.log(this.role)
    });
   
  }

  ngOnInit(): void {

   
    
  

    this.configService.configChangeListner.subscribe(config => {
      this.isAdmin = false
      this.isCustomer = false
      
      this.config = config.config;
   
     
    })

  }

}
