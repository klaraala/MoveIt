import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      { 
        path: 'detail',
        loadChildren: '../dashboard-detail/dashboard-detail.module#DashboardDetailPageModule' 
      }
      
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard/detail',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
