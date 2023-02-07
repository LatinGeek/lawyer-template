import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from 'src/app/shared/routes/content-routes';
import { HomeComponent } from './home/home.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
        path: '',
        component: LandingLayoutComponent,
        children: [
          {path: 'home', component: HomeComponent},
          {path: 'portfolio', component: PortfolioComponent}
        ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
