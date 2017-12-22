import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* custome modules */
import { AppRouterModule } from './app.router.module';
import { AdminModule } from './admin/admin.module';

/* custome components */
import { AppComponent } from './app.component';



@NgModule({
  	declarations: [
    	AppComponent,
  	],
  	imports: [
    	BrowserModule,
    	BrowserAnimationsModule,
        AdminModule,
    	AppRouterModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
