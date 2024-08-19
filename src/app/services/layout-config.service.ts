import { Injectable } from '@angular/core';
import { ILayoutConfig } from '../models/config/layout-config';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutConfigService {

  
  static myConfig: ILayoutConfig = {
    toolBar: false,
    adminSideNav: false,
    customerSideNav: false,
    footer:false
  }


  constructor() { }

  get config() { return LayoutConfigService.myConfig }

  private notificationeSource = new Subject<{ config: ILayoutConfig }>();

  configChangeListner = this.notificationeSource.asObservable();

  public setConfig(config: ILayoutConfig): void {
    LayoutConfigService.myConfig = config
    this.notificationeSource.next({ config });
  }
}


