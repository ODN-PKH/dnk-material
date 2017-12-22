import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
	MatSidenavModule,
	MatListModule,
	MatToolbarModule
	 } from '@angular/material';

import { SidemenuComponent } from './sidemenu.component';
// import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';

@NgModule({
	declarations: [ SidemenuComponent ],
	imports: [
	    CommonModule,
	    FlexLayoutModule,
	    MatSidenavModule,
	    MatToolbarModule,
	    MatListModule
	], 
	providers: [
	],
	exports: [
		SidemenuComponent
	]
})
export class SidemenuModule { }