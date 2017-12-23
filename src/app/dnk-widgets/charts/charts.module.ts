import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3LineChartComponent } from './d3/d3-line-chart/d3-line-chart.component';

import { NvD3Module } from 'ngx-nvd3';

@NgModule({
  imports: [
    CommonModule,
    NvD3Module
  ],
  declarations: [ D3LineChartComponent ],
  exports: [ D3LineChartComponent ]
})
export class ChartsModule { }
