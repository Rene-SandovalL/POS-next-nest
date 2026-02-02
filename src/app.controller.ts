import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getPost(): string {
    return this.appService.postHello();
  }

  @Put()
  getPut(): string {
    return 'Esto es una peticion PUT';
  }
}
