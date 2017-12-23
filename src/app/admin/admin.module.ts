import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatSidenavModule,
	MatListModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule
	 } from '@angular/material';

import { AdminComponent } from './admin.component';

/* custom modules */
import { SidemenuModule } from '../core/sidemenu/sidemenu.module';
import { DnkScrollbarModule } from '../scrollbar/dnk-scrollbar.module';

@NgModule({
	declarations: [AdminComponent],
	imports: [
	    CommonModule,
	    DnkScrollbarModule,
	    MatSidenavModule,
	    MatListModule,
	    MatToolbarModule,
	    MatButtonModule,
	    MatIconModule,
	    SidemenuModule,
	], 
	providers: [
	],
	exports: [
		AdminComponent
	]
})
export class AdminModule { }