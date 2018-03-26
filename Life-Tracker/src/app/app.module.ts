import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SleepTrackerComponentComponent } from './sleep-tracker/sleep-tracker.component';
import { SleepDataViewerComponent } from './sleep-tracker/sleep-data-viewer/sleep-data-viewer.component';
import { SleepDataEditorComponent } from './sleep-tracker/sleep-data-editor/sleep-data-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    SleepTrackerComponentComponent,
    SleepDataViewerComponent,
    SleepDataEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
