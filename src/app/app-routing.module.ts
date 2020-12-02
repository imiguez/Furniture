import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnitureAboutComponent } from './furniture-about/furniture-about.component';
import { FurnitureStoreComponent } from './furniture-store/furniture-store.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "store",
    pathMatch: "full"
  },
  {
    path : "store",
    component : FurnitureStoreComponent,
  },
  {
    path : "about",
    component : FurnitureAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
