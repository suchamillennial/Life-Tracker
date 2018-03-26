import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sleep-data-editor',
  templateUrl: './sleep-data-editor.component.html',
  styleUrls: ['./sleep-data-editor.component.css']
})
export class SleepDataEditorComponent implements OnInit {

  // Create a ViewChild to monitor the form
  @ViewChild('form') form: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // Get the contents of the form and print them out
    console.log(this.form.value.timeStamp);
    console.log(this.form.value.sleepType);

    // Clear the form after a submit
    this.form.reset();
  }

}
