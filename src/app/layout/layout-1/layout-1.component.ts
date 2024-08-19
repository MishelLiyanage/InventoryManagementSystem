import { Component } from '@angular/core';
import { LayoutConfigService } from '../../services/layout-config.service';

@Component({
  selector: 'app-layout-1',
  templateUrl: './layout-1.component.html',
  styleUrl: './layout-1.component.css'
})
export class Layout1Component {

  config: any

  constructor(private configService: LayoutConfigService) {
    this.config = configService.config; 
   
  }

  ngOnInit(): void {
    this.configService.configChangeListner.subscribe(config => {
      this.config = config.config;
    })
  }

}
