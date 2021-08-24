import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller('countries')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:country')
  public async getCountry(@Res() res: Response, @Param('country') country:string): Promise<Response> {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      id:uuidv4(),
      info: await this.appService.getCountry(country),
    });
  }
}
