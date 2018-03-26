export class SleepDataPoint {
    
    // Properties of a sleep data point
    public timestamp: Date;
    public sleepType: string; // This is going to Either be Fall Asleep or Wake up

    constructor(timeStamp: Date, sleepType: string){
        this.timestamp = timeStamp;
        this.sleepType = sleepType;
    }
}