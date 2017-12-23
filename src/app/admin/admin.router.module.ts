import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [{
		path:'',component: AdminComponent, children: [
			{ path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
		]
	}];

@NgModule({
    imports: [
		RouterModule.forChild(routes)
		],
    exports: [ RouterModule ]
})
export class AdminRouterModule { }
