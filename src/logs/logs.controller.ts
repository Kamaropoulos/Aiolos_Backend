import { Controller, Get, Post, Body, Response, HttpStatus } from '@nestjs/common';
import { LogsService } from './logs.service';
import { ILogs } from './logs.interface';

@Controller('logs')
export class LogsController {
    constructor(private readonly logsService: LogsService) {}
    
    // GET /logs Endpoint
    // Get all logs from Mongo
    @Get()
    async getLogs() {
      // Get and return logs from logsRervice
      return this.logsService.getLogs();
    }

    // POST /logs Endpoint
    // Store a new log into Mongo
    @Post()
    async postLogs(@Body() body, @Response() res: any) {
      // Try to store data into Mongo
      let success: Boolean = await this.logsService.storeLog(body);
      // If the operation was successful
      if (success){
        // respond with HTTP Code 201 CREATED
        // and a success message
        return res.status(HttpStatus.CREATED)
                      .json({
                              message: "Log stored successfully!"
                      });
      } else {
        // If not, respond with 500, internal server error and an error message
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
                message: "An error occured during storing the log."
        });
      }
    }
}
