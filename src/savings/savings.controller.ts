import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
  UsePipes,
  HttpCode,
} from '@nestjs/common';
import { SavingsService } from './savings.service';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { query } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('savings')
@Controller('savings')
@UsePipes(new ValidationPipe())
export class SavingsController {
  constructor(private readonly savingsService: SavingsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createSavingDto: CreateSavingDto) {
    console.log('entro cjmg::::');
    return this.savingsService.create(createSavingDto);
  }

  @Get()
  findAll(@Query() query: string) {
    console.log(query);
    return this.savingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
    return this.savingsService.update(+id, updateSavingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savingsService.remove(+id);
  }
}
