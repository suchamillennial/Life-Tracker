import { SleepDataPoint } from "./sleep-data-point.model";
import { timeout } from "q";

export class SleepDataService {
    // Create an array of dummy data
  sleepDataPoints = [
    new SleepDataPoint(new Date('2018-03-10T01:22:00'), "Start"),
    new SleepDataPoint(new Date('2018-03-10T10:22:00'), "End"),
    new SleepDataPoint(new Date('2018-03-10T01:00:00'), "Start"),
    new SleepDataPoint(new Date('2018-03-10T09:22:00'), "End"),
    new SleepDataPoint(new Date('2018-03-10T01:00:00'), "Start"),
    new SleepDataPoint(new Date('2018-03-10T09:22:00'), "End")
   ];
   expectedSleepType: string;
    
   // The program expects a sleep start to be followed by an end so we have a function that sets that
   setExpectedSleepType(){
        if(this.sleepDataPoints[this.sleepDataPoints.length-1].sleepType === "Start"){
            this.expectedSleepType = "End";
        } else if (this.sleepDataPoints[this.sleepDataPoints.length-1].sleepType === "End"){
            this.expectedSleepType = "Start";
        }
        //Print the new expectedSleepType
        console.log(`Expected Sleep Type: ${this.expectedSleepType}`);
   }

   getExpectedSleepType(){
       return this.expectedSleepType;
   }

    getSleepDataPoints(){
        // Return a reference to the sleepDataPoints array.
       // This method could be updated to use slice() that would return a copy,
       // but then an observable and subscription would be needed on updates
       return this.sleepDataPoints;
   }

   addSleepDataPoint(dataPoint: SleepDataPoint){
        this.sleepDataPoints.push(dataPoint);
        // Update to a new ExpectedSleepType since you have added a new SleepDataPoint
        this.setExpectedSleepType();

   }
}