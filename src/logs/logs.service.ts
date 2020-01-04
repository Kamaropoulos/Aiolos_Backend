import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ILogs } from './logs.interface';
import { Model } from 'mongoose';

@Injectable()
export class LogsService {
    constructor(@InjectModel('Logs') private readonly logsModel: Model<ILogs>) {}
    async getLogs(): Promise<Object> {
        return await this.logsModel.find();
    }

    getLogsCount(): Number {
        return this.logsModel.count();
    }

    async storeLog(data: Object): Promise<Boolean>{
        const storedLog = new this.logsModel({
            drone_id: data["id"],
            gprmc: data["GPRMC"],
            sensorReadings: data["sensorReadings"]
        });
        let id = await storedLog.save();
        console.log(id);
        return true;
    }
}
