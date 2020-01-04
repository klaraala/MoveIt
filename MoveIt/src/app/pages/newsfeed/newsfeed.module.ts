import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsfeedPage } from './newsfeed.page';

const routes: Routes = [
  {
    path: 'newsfeed',
    component: NewsfeedPage,
    children: [
      { 
        path: 'detail',
        loadChildren: '../newsfeed-detail/newsfeed-detail.module#NewsfeedDetailPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'newsfeed/detail',
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
  declarations: [NewsfeedPage]
})
export class NewsfeedPageModule {}
