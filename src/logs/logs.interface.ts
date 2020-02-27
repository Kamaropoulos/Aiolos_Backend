import { Document } from 'mongoose';

export interface ILogs {
    _id?: number;
    drone_id: number;
    gprmc: String;
    gps_data: Object;
    sensorReadings: Object;
    createdAt?: Date;
    updatedAt?: Date;
}