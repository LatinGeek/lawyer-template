import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from 'src/app/shared/routes/content-routes';
import { HomeComponent } from './home/home.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

const routes: Routes = [
  {
        path: 'home',
        component: HomeComponent,
        data: {
          title: "Home",
          breadcrumb: "Home"
        }
      
      },
  
  {
    path: '',
    component: LandingLayoutComponent,
    canActivate: [],
    children: content
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
