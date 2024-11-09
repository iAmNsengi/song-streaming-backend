import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return `Find One song endpoine`;
  }
  @Put(':id')
  update() {
    return `Update one route`;
  }
  @Delete(':id')
  delete() {
    return `Delete endpoint`;
  }
  @Post()
  create() {
    return this.songsService.create('I am nsengi bro');
  }
}
