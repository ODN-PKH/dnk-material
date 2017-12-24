import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnk-d3-donut-chart',
  templateUrl: './d3-donut-chart.component.html',
  styleUrls: ['./d3-donut-chart.component.scss']
})
export class D3DonutChartComponent implements OnInit {

    @Input() height;
	options: any;
	data: any;
  	constructor() { }

  	ngOnInit() {
  		this.options = {
  			chart: {
                type: 'pieChart',
                height: this.height,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
  		};

  		this.data = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];
  	}

}
