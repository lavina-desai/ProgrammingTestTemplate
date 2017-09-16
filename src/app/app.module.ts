import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FetchNumberComponent } from './fetch-number/fetch-number.component';
import { FibonacciSeriesComponent } from './fibonacci-series/fibonacci-series.component';
import { RightAngleComponent } from './right-angle/right-angle.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchNumberComponent,
    FibonacciSeriesComponent,
    RightAngleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'number', component: FetchNumberComponent},
      { path: 'fibo' , component: FibonacciSeriesComponent},
      { path: 'rightangle' , component:RightAngleComponent},
      { path: '', redirectTo:'number', pathMatch:'full'},
      { path: '**', redirectTo:'number'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
