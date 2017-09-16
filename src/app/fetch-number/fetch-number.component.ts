import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FibonacciSeriesComponent } from '../fibonacci-series/fibonacci-series.component';

@Component({
  selector: 'app-fetch-number',
  templateUrl: './fetch-number.component.html',
  styleUrls: ['./fetch-number.component.css']
})
export class FetchNumberComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

save(){
  
}

}
