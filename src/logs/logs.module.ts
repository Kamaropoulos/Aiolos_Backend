import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsSchema } from 'src/schemas/logs.schema';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Logs', schema: LogsSchema}])],
    providers: [LogsService],
    controllers: [LogsController],
    exports: [MongooseModule.forFeature([{ name: 'Logs', schema: LogsSchema}])]
})
export class LogsModule {}
