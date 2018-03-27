import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SleepDataService } from '../sleep-data.service';
import { SleepDataPoint } from '../sleep-data-point.model';

@Component({
  selector: 'app-sleep-data-editor',
  templateUrl: './sleep-data-editor.component.html',
  styleUrls: ['./sleep-data-editor.component.css']
})
export class SleepDataEditorComponent implements OnInit {

  // Create a ViewChild to monitor the form
  @ViewChild('form') form: NgForm;
  constructor(private sleepDataService: SleepDataService) { }

  ngOnInit() {
  }

  onSubmit(){
    // Get the contents of the form and print them out
    let timeStamp = this.form.value.timeStamp;
    let sleepType = this.form.value.sleepType;
    console.log(timeStamp);
    console.log(sleepType);

    // Add the new Datapoint to the sleepDataPoints array in the SleepDataService
    this.sleepDataService.addSleepDataPoint(new SleepDataPoint(new Date(timeStamp), sleepType));

    // Clear the form after a submit
    this.form.reset();
  }

}
