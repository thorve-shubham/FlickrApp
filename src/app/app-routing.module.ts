import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path  : "images", component : ImagesComponent},
  { path : "details/:id", component : ImageDetailComponent},
  { path : "**", pathMatch : "full" , redirectTo : "images" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
