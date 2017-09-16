import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci-series',
  templateUrl: './fibonacci-series.component.html',
  styleUrls: ['./fibonacci-series.component.css']
})
export class FibonacciSeriesComponent implements OnInit {

  i:any;
  j:any;

  constructor() { }

  ngOnInit() {
  }

  fibonacci(i,j){
    for(i=1;i<=3;i++)
    {
        for(j=1;j<i;j++)
        {
          document.write(j);
        }
    }
  }

}
