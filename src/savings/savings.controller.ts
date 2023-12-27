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
<<<<<<< HEAD
  @HttpCode(201)
  //findAll(@Query() query: string) {
    getListSavings(){
    return this.savingsService.findAll();
    }

  @Get(':numProduct')
  findOne(@Param('numProduct') numProduct: string) {
    return this.savingsService.findOne(numProduct);
=======
  findAll(@Query() query: string) {
    console.log(query);
    return this.savingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.savingsService.findOne(+id);
>>>>>>> d40c7c366858bdf9abfea05f4e77985c8f240ba8
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSavingDto: UpdateSavingDto) {
<<<<<<< HEAD
    return this.savingsService.update(id, updateSavingDto);
  }

  @Delete(':id')
  @HttpCode(200)
  //remove(@Param('id') id: string) {
    deleteSaving(@Param('id') id:string){
    return this.savingsService.remove(id);
=======
    return this.savingsService.update(+id, updateSavingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.savingsService.remove(+id);
>>>>>>> d40c7c366858bdf9abfea05f4e77985c8f240ba8
  }
}
