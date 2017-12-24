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

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule
  ],
  declarations: [ SocialCardComponent ],
  exports: [ SocialCardComponent ]
})
export class CardsModule { }
