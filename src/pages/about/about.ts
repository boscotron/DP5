import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as HighCharts from 'HighCharts';

/*
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighChartsSolidGuague from 'highcharts-solid-gauge';
HighchartsMore(HighCharts);
HighChartsSolidGuague(HighCharts);
*/

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

	ionViewDidLoad(){
		this.ver();
	}

	ver(){
		HighCharts.chart('container', {
			chart: {
			type: 'bar'
			},
			title: {
			text: 'Fruit Consumption'
			},
			xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
			},
			yAxis: {
			title: {
			text: 'Fruit eaten'
			}
			},
			series: [{
			name: 'Jane',
			data: [1, 0, 4]
			}, {
			name: 'John',
			data: [5, 7, 3]
			}]
			});
	}
}
