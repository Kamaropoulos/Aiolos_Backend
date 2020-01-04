import { Document } from 'mongoose';

export interface ILogs {
    _id?: number;
    drone_id: number;
    gprmc: String;
    sensorReadings: Object;
    createdAt?: Date;
    updatedAt?: Date;
}