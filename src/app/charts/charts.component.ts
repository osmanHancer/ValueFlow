import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChartModule, UIChart } from 'primeng/chart';
import { Chart, registerables } from 'chart.js';
import { animation } from '@angular/animations';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  imports: [ChartModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  basicData: any;
  basicOptions: any;
  char: any;

  public config: any = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Data One',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          backgroundColor: 'blue',
        },
        {
          label: 'Data Two',
          data: [28, 48, 40, 19, 86, 27],
          fill: false,
          backgroundColor: 'red'
        }
      ],
    },
    options: {
      animations: {
        borderColor: {
          type: 'color',
          duration: 1000,
          easing: 'linear',
          from: "red",
          to:"blue",
          loop: true,
          
        },
       
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      
    }
  }
  };

  ngOnInit() {
    this.char = new Chart('MyChart', this.config);
    const canvas = document.getElementById('MyChart');
    canvas?.addEventListener('click', (event) => this.onChartClick(event));
  }

  onChartClick(event: MouseEvent) {
    const chart = this.char;
    const point = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);

    if (point.length) {
      const datasetIndex = point[0].datasetIndex;
      const dataIndex = point[0].index;
      const label = chart.data.labels[dataIndex];
      const value = chart.data.datasets[datasetIndex].data[dataIndex];
      
      console.log(`Clicked on: ${label} with value ${value}`);
    }
  }
}
