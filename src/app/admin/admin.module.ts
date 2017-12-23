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
import { AdminRouterModule } from './admin.router.module';
import { SidemenuModule } from '../core/sidemenu/sidemenu.module';
import { DnkScrollbarModule } from '../scrollbar/dnk-scrollbar.module';
import { NotificationsModule } from '../core/notifications/notifications.module';

@NgModule({
	declarations: [AdminComponent],
	imports: [
	    CommonModule,
	    DnkScrollbarModule,
	    NotificationsModule,
	    MatSidenavModule,
	    MatListModule,
	    MatToolbarModule,
	    MatButtonModule,
	    MatIconModule,
	    SidemenuModule,
	    AdminRouterModule
	], 
	providers: [
	],
	exports: [
		AdminComponent
	]
})
export class AdminModule { }