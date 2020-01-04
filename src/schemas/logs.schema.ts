import * as mongoose from 'mongoose';

export const LogsSchema = new mongoose.Schema({
    drone_id: { type: Number },
    gprmc: { type: String },
    sensorReadings: { type: Object }
}, { timestamps: true });
