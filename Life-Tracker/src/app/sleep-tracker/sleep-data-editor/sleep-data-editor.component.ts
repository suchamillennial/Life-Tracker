import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SleepDataService } from '../sleep-data.service';
import { SleepDataPoint } from '../sleep-data-point.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sleep-data-editor',
  templateUrl: './sleep-data-editor.component.html',
  styleUrls: ['./sleep-data-editor.component.css']
})
export class SleepDataEditorComponent implements OnInit {

  // Create a ViewChild to monitor the form
  @ViewChild('form') form: NgForm;
  expectedSleepType: string;

  constructor(private sleepDataService: SleepDataService) { }

  ngOnInit() {
    // This should be an observable so we can view when it changes
    this.expectedSleepType = this.sleepDataService.getExpectedSleepType();

    console.log(`ExpectedSleepType set to: ${this.expectedSleepType}`);
  }

  getCurrentTimeStampString(){
    let dp = new DatePipe(navigator.language);
    let p = 'y/MM/dd, hh:mm:ss';
    return dp.transform(Date.now(), p);
  }
  onSubmit(){
    // Get the contents of the form and print them out
    let timeStamp = this.form.value.timeStamp;
    let sleepType = this.form.value.sleepType;
    console.log(timeStamp);
    console.log(sleepType);

    // Add the new Datapoint to the sleepDataPoints array in the SleepDataService
    this.sleepDataService.addSleepDataPoint(new SleepDataPoint(new Date(timeStamp), sleepType));
    // Update the expectedSleepType variable to match the one in the service, since it has changed due to the add
    this.expectedSleepType = this.sleepDataService.getExpectedSleepType();
    // Clear the form after a submit and set the sleep type to whatever the expectedSleepType is
    
    this.form.reset({
      sleepType: this.expectedSleepType,
      timeStamp: this.getCurrentTimeStampString()});
  }

}
