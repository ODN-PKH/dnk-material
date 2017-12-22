import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    	FlexLayoutModule,
        AdminModule,
    	AppRouterModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
