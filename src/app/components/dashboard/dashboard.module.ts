import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';
import { CountToModule } from 'angular-count-to';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";
import { LandingModule } from "./landing/landing.module";


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { DoubleSlideTextComponent } from 'src/app/shared/components/double-slide-text/double-slide-text.component';

@NgModule({
    declarations: [
        DefaultComponent,
        ECommerceComponent,
        UniversityComponent,
        BitcoinComponent,
        ServerComponent,
        ProjectComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        CarouselModule,
        NgbModule,
        ChartistModule,
        NgChartsModule,
        CountToModule,
        DashboardRoutingModule,
        NgxChartsModule,
        Ng2GoogleChartsModule,
        SharedModule,
        LandingModule
    ]
})
export class DashboardModule { }
