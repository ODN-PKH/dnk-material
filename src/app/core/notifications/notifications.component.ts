import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnk-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
	isOpen: boolean = false;
  	@Input() notifications = [];
  	constructor() { }

  	ngOnInit() {
  	}

}
