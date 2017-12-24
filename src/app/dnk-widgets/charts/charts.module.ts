import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3LineChartComponent } from './d3/d3-line-chart/d3-line-chart.component';

import { NvD3Module } from 'ngx-nvd3';
import { D3DonutChartComponent } from './d3/d3-donut-chart/d3-donut-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NvD3Module
  ],
  declarations: [ D3LineChartComponent, D3DonutChartComponent ],
  exports: [ D3LineChartComponent, D3DonutChartComponent ]
})
export class ChartsModule { }
