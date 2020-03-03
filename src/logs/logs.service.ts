import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ILogs } from './logs.interface';
import { Model } from 'mongoose';

@Injectable()
export class LogsService {
    constructor(@InjectModel('Logs') private readonly logsModel: Model<ILogs>) {}

    // Method to get all logs from Mongo
    async getLogs(): Promise<Object> {
        return await this.logsModel.find();
    }

    // Method to get the count of the logs
    getLogsCount(): Number {
        return this.logsModel.count();
    }

    // Store logs into Mongo collection
    async storeLog(data: Object): Promise<Boolean>{
        // Create new Model object with data from request
        const storedLog = new this.logsModel({
            drone_id: data["id"],
            gprmc: data["GPRMC"],
            gps_data: data["gps_data"],
            sensorReadings: data["sensorReadings"]
        });
        // Store data to Mongo
        let id = await storedLog.save();
        // Print out the Mongo DB response
        console.log(id);
        return true;
    }
}
