import { Component, OnInit } from '@angular/core';
import { SleepDataPoint } from '../sleep-data-point.model';

@Component({
  selector: 'app-sleep-data-viewer',
  templateUrl: './sleep-data-viewer.component.html',
  styleUrls: ['./sleep-data-viewer.component.css']
})
export class SleepDataViewerComponent implements OnInit {

  // Create an array of dummy data that will be held by the service at a later point
  sleepDataPoints = [
     new SleepDataPoint(new Date('2018-03-10T01:22:00'), "Start"),
     new SleepDataPoint(new Date('2018-03-10T10:22:00'), "End"),
     new SleepDataPoint(new Date('2018-03-10T01:00:00'), "Start"),
     new SleepDataPoint(new Date('2018-03-10T09:22:00'), "End"),
     new SleepDataPoint(new Date('2018-03-10T01:00:00'), "Start"),
     new SleepDataPoint(new Date('2018-03-10T09:22:00'), "End")
    ];
  constructor() { }

  ngOnInit() {
    console.log(this.sleepDataPoints);
  }

}
