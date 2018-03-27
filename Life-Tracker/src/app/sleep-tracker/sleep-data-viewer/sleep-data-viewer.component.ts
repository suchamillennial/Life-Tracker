import { Component, OnInit } from '@angular/core';
import { SleepDataPoint } from '../sleep-data-point.model';
import { SleepDataService } from '../sleep-data.service';

@Component({
  selector: 'app-sleep-data-viewer',
  templateUrl: './sleep-data-viewer.component.html',
  styleUrls: ['./sleep-data-viewer.component.css']
})
export class SleepDataViewerComponent implements OnInit {
  sleepDataPoints: SleepDataPoint[];

  constructor(private sleepDataService: SleepDataService) { }

  ngOnInit() {
    this.sleepDataPoints = this.sleepDataService.getSleepDataPoints();
    console.log(this.sleepDataPoints);
  }

}
