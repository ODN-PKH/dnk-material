import { Component, OnInit } from '@angular/core';
import { Menus } from './menu-list';

@Component({
  selector: 'dnk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

	menus = Menus;
  	constructor() { }

  	ngOnInit() {
  	}

}
