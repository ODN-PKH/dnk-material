import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/* custome modules */
import { AppRouterModule } from './app.router.module';

/* custome components */
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  	declarations: [
    	AppComponent,
    	AdminComponent
  	],
  	imports: [
    	BrowserModule,
    	BrowserAnimationsModule,
    	FlexLayoutModule,
    	AppRouterModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
