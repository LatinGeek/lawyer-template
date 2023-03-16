import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { content } from 'src/app/shared/routes/content-routes';
import { HomeComponent } from './home/home.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogSingleComponent } from '../../blog/blog-single/blog-single.component';

const routes: Routes = [
  {
        path: '',
        component: LandingLayoutComponent,
        children: [
          {path: 'home', component: HomeComponent},
          {path: 'portfolio', component: PortfolioComponent},
          {path: 'contact', component: ContactComponent},
          {path: 'about', component: AboutComponent},
          {path: 'blogs', component: BlogSingleComponent},

        ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
