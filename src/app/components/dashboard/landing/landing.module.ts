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
import { LandingRoutingModule } from "./landing-routing.module";

// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';

@NgModule({
    declarations: [
        HomeComponent,
        LandingLayoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CarouselModule,
        NgbModule,
        ChartistModule,
        NgChartsModule,
        CountToModule,
        NgxChartsModule,
        Ng2GoogleChartsModule,
        SharedModule,
        LandingRoutingModule
    ],
    exports: [
        LandingLayoutComponent
    ]
})
export class LandingModule { }
