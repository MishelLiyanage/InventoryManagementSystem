import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './features/feature.module';
import { DashboardModule } from './dashboards/dashboard.module'; 
import { ReportModule } from './reports/report.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./features/feature.module').then((module) => module.FeatureModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboards/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./reports/report.module').then((module) => module.ReportModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    FeatureModule,
    DashboardModule,
    ReportModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
