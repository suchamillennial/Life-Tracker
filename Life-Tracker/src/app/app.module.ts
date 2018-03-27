import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SleepTrackerComponentComponent } from './sleep-tracker/sleep-tracker.component';
import { SleepDataViewerComponent } from './sleep-tracker/sleep-data-viewer/sleep-data-viewer.component';
import { SleepDataEditorComponent } from './sleep-tracker/sleep-data-editor/sleep-data-editor.component';
import { SleepDataService } from './sleep-tracker/sleep-data.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SleepTrackerComponentComponent,
    SleepDataViewerComponent,
    SleepDataEditorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SleepDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
