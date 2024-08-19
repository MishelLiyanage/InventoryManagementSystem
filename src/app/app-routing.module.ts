import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './features/feature.module';
import { DashboardModule } from './dashboards/dashboard.module'; 

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    FeatureModule,
    DashboardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
