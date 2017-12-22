import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
	{ path: 'admin', component: AdminComponent },
	{ path: '**', redirectTo: 'admin' },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouterModule { }
