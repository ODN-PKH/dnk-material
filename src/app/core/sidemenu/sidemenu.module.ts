import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DnkScrollbarModule } from '../../scrollbar/dnk-scrollbar.module';
import { 
	MatSidenavModule,
	MatListModule,
	MatToolbarModule,
	MatChipsModule,
	MatIconModule
	 } from '@angular/material';

import { SidemenuComponent } from './sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
// import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';

@NgModule({
	declarations: [ SidemenuComponent, SidemenuItemComponent ],
	imports: [
	    CommonModule,
	    FlexLayoutModule,
	    RouterModule,
	    DnkScrollbarModule,
	    MatSidenavModule,
	    MatToolbarModule,
	    MatListModule,
	    MatChipsModule,
	    MatIconModule
	], 
	providers: [
	],
	exports: [
		SidemenuComponent
	]
})
export class SidemenuModule { }