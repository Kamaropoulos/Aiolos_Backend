import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsController } from './logs/logs.controller';
import { LogsController } from './logs/logs.controller';

@Module({
  imports: [],
  controllers: [AppController, LogsController],
  providers: [AppService],
})
export class AppModule {}
