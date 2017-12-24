import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnk-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

	@Input() height = '400px';
	constructor() { }

	ngOnInit() {
 	}

}
