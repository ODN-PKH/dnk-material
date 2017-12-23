import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DnkScrollbarModule } from '../../scrollbar/dnk-scrollbar.module';
import { 
	MatButtonModule,
	MatListModule,
	MatIconModule,
	MatCardModule
	 } from '@angular/material';
import { NotificationsComponent } from './notifications.component';

@NgModule({
	declarations: [ NotificationsComponent ],
	imports: [ 
		CommonModule,
		FlexLayoutModule,
		DnkScrollbarModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatListModule
	],
	exports: [ NotificationsComponent ]

})

export class NotificationsModule { }