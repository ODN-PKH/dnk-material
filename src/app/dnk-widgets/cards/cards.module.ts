import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialCardComponent } from './social-card/social-card.component';
import { 
	MatSidenavModule,
	MatListModule,
	MatToolbarModule,
	MatChipsModule,
	MatIconModule,
	MatButtonModule
	 } from '@angular/material';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [ SocialCardComponent, WeatherCardComponent ],
  exports: [ SocialCardComponent, WeatherCardComponent ]
})
export class CardsModule { }
