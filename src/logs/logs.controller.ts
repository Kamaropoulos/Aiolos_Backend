import { Controller, Get, Post, Body, Response, HttpStatus } from '@nestjs/common';
import { LogsService } from './logs.service';
import { ILogs } from './logs.interface';

@Controller('logs')
export class LogsController {
    constructor(private readonly logsService: LogsService) {}
    
    @Get()
    async getPosts() {
      return this.logsService.getLogs();
    }

    @Post()
    async postLogs(@Body() body, @Response() res: any) {
      let success: Boolean = await this.logsService.storeLog(body);      
      if (success){
        return res.status(HttpStatus.CREATED)
                      .json({
                              message: "Log stored successfully!"
                      });
        
      } else {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
                message: "An error occured during storing the log."
        });
      }
    }
}
