import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from '../dnk-widgets/charts/charts.module';

const routes: Routes = [
	{
		path:'',component: DashboardComponent
	}
]
@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ DashboardComponent ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
