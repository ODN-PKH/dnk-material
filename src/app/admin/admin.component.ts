import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'dnk-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	sideNavOpened: boolean = true;
	sideNavMode: string = 'side';
  	constructor(private media: ObservableMedia) { }

  	ngOnInit() {
  		this.toggleView();
  	}
  	toggleView() {
		if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
        } else if(this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
        }
	}

}
