import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';
import TarhelyDto from './tarhely.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('/api/tarhely')
  async CDrives(){
    const [CDrives]=await db.execute('SELECT id, nev, meret, ar FROM tarhelycsomagok');
    return {CDrives:CDrives};
  }

  @Post('/api/tarhely')
  async addCDrive(@Body() tarhely:TarhelyDto){
    await db.execute('INSERT INTO tarhelycsomagok (nev,meret,ar) VALUES(?,?,?)',[tarhely.nev, tarhely.meret, tarhely.ar]);
  }

  @Delete('/api/tarhely/:id')
  async deleteCDrive(@Param('id')id:number){
      await db.execute('DELETE FROM tarhelycsomagok WHERE id=?', [id]);
  }

}
