import { Chart, registerables } from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  @ViewChild('dChart', { static: false }) dChart: ElementRef;
  constructor() { }
  data: any;
  labels = [ 'Men', 'Electronics', 'Women'];
  colorCodes = ['rgba(62,91,208)', 'rgba(80,109,226)', 'rgba(122,148,246)']
  ngOnInit(): void {

  }
  ngAfterViewInit() {
    Chart.register(...registerables);
    const donutChart = this.dChart.nativeElement;
    console.log("Testing");
    this.data = new Chart(donutChart, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          label: '',
          data: [300, 50, 100],
          backgroundColor: this.colorCodes,
          borderWidth: 0,
        }],
        
      },
      options: {
        cutout: 85
      }
    });
  }


}
