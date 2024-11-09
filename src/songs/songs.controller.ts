import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'Find All songs';
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
    return `Create a new song endpoint`;
  }
}
