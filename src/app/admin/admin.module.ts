import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatSidenavModule,
	MatListModule
	 } from '@angular/material';

import { AdminComponent } from './admin.component';

@NgModule({
	declarations: [AdminComponent],
	imports: [
	    CommonModule,
	    MatSidenavModule,
	    MatListModule,
	], 
	providers: [
	],
	exports: [
		AdminComponent
	]
})
export class AdminModule { }