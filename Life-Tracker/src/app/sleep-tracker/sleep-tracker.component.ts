import { Component, OnInit } from '@angular/core';
import { SleepDataService } from './sleep-data.service';

@Component({
  selector: 'app-sleep-tracker',
  templateUrl: './sleep-tracker.component.html',
  styleUrls: ['./sleep-tracker.component.css']
})
export class SleepTrackerComponentComponent implements OnInit {

  constructor(private sleepDataService: SleepDataService) { }

  ngOnInit() {
    // We need to initially set the expected Sleep Data Type in the Sleep Tracker component before it is used in the child components
    this.sleepDataService.setExpectedSleepType();
  }

}
