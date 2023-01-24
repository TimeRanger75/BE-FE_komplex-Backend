import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';
import TarhelyDto from './tarhely.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('/api/tarhely')
  async CDrives(){
    const [CDrives]=await db.execute('SELECT id, nev, meret, ar');
    return {CDrives:CDrives}
  }

}
