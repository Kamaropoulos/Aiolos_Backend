import * as mongoose from 'mongoose';

export const LogsSchema = new mongoose.Schema({
    drone_id: { type: Number },
    gprmc: { type: String },
    gps_data: { type: Object },
    sensorReadings: { type: Object }
}, { timestamps: true });
