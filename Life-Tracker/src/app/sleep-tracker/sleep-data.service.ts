import { SleepDataPoint } from "./sleep-data-point.model";

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

   getSleepDataPoints(){
       // Return a reference to the sleepDataPoints array.
       // This method could be updated to use slice() that would return a copy,
       // but then an observable and subscription would be needed on updates
       return this.sleepDataPoints;
   }

   addSleepDataPoint(dataPoint: SleepDataPoint){
        this.sleepDataPoints.push(dataPoint);
   }
}