import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatSidenavModule,
	MatListModule
	 } from '@angular/material';

import { SidemenuComponent } from './sidemenu.component';
// import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';

@NgModule({
	declarations: [ SidemenuComponent ],
	imports: [
	    CommonModule,
	    MatSidenavModule,
	    MatListModule
	], 
	providers: [
	],
	exports: [
		SidemenuComponent
	]
})
export class SidemenuModule { }