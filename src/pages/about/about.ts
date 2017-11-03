import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
import * as HighCharts from 'HighCharts';
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
		
		/*var myChart = HighCharts.chart('plop', {

						    chart: {
						        type: 'solidgauge',
						        marginTop: 50
						    },

						    title: {
						        text: 'Tienes 5 Retos activos!<br>Vamos excelente!',
						        style: {
						            fontSize: '1.8em'
						        }
						    },

						    tooltip: {
						        borderWidth: 0,
						        backgroundColor: 'none',
						        shadow: false,
						        style: {
						            fontSize: '2em'
						        },
						        pointFormat: '<table class="retoTituloNegro" style=" color: {point.color};"><tr><td>{series.name} </td><td> {point.y} %  <td></tr><tr><td><small>Solo fltan</small> </td><td> <small> {point.bsktiempo}</small> <td></tr></table>',
						        positioner: function (labelWidth) {
						            return {
						                x: 200 - labelWidth / 2,
						                y: 180
						            };
						        }
						    },

						    pane: {
						        startAngle: 0,
						        endAngle: 360,
						        background: [{ // Track for Move
						            outerRadius: '112%',
						            innerRadius: '100%',
						            backgroundColor: HighCharts.Color(HighCharts.getOptions().colors[0])
						                .setOpacity(0.3)
						                .get(),
						            borderWidth: 0
						        }, { // Track for Exercise
						            outerRadius: '99%',
						            innerRadius: '90%',
						            backgroundColor: HighCharts.Color(HighCharts.getOptions().colors[1])
						                .setOpacity(0.3)
						                .get(),
						            borderWidth: 0
						        }, { // Track for Exercise
						            outerRadius: '89%',
						            innerRadius: '80%',
						            backgroundColor: HighCharts.Color(HighCharts.getOptions().colors[2])
						                .setOpacity(0.3)
						                .get(),
						            borderWidth: 0
						        }, { // Track for Exercise
						            outerRadius: '79%',
						            innerRadius: '70%',
						            backgroundColor: HighCharts.Color(HighCharts.getOptions().colors[3])
						                .setOpacity(0.3)
						                .get(),
						            borderWidth: 0
						        }, { // Track for Stand
						            outerRadius: '69%',
						            innerRadius: '60%',
						            backgroundColor: HighCharts.Color(HighCharts.getOptions().colors[4])
						                .setOpacity(0.3)
						                .get(),
						            borderWidth: 0
						        }]
						    },

						    yAxis: {
						        min: 0,
						        max: 100,
						        lineWidth: 0,
						        tickPositions: []
						    },

						    plotOptions: {
						        solidgauge: {
						            dataLabels: {
						                enabled: false
						            },
						            linecap: 'round',
						            stickyTracking: false,
						            rounded: true
						        }
						    },

						    series: [{
						        name: 'Cena de navidad',
						        data: [{
						            color: HighCharts.getOptions().colors[0],
						            bsktiempo: '17 días',
						        //    radius: '112%',
						        //    innerRadius: '100%',
						            y: 82
						        }]
						    }, {
						        name: 'Presentación',
						        data: [{
						            color: HighCharts.getOptions().colors[1],
						            bsktiempo: '17 días',
						         //   radius: '99%',
						         //   innerRadius: '90%',
						            y: 78
						        }]
						    }, {
						        name: 'Fiesta con Arturo',
						        data: [{
						            color: HighCharts.getOptions().colors[2],
						            bsktiempo: '17 días',
						          //  radius: '89%',
						          //  innerRadius: '80%',
						            y: 55
						        }]
						    }, {
						        name: 'Playita 2018',
						        data: [{
						            color: HighCharts.getOptions().colors[3],
						            bsktiempo: '17 días',
						          //  radius: '79%',
						          //  innerRadius: '70%',
						            y: 50
						        }]
						    }, {
						        name: 'Carnaval',
						        data: [{
						            color: HighCharts.getOptions().colors[4],
						            bsktiempo: '17 días',
						           // radius: '69%',
						           // innerRadius: '60%',
						            y: 35
						        }]
						    }]
						}
						);

*/

	}
}
