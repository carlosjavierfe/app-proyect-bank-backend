import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSavingDto {
  @ApiProperty({
    description: 'type product',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  typeProduct: string;

  @ApiProperty({
    description: 'type product',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  numProduct: string;

  @ApiProperty({
    description: 'type product',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  product: string;

  @ApiProperty({
    description: 'type business',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  stateProduct: string;
<<<<<<< HEAD
=======

  @ApiProperty({
    description: 'telephone person',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  contactInfo: string;

  @ApiProperty({
    description: 'name person',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  personName: string;

  
  @ApiProperty({
    description: 'type person',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  typeIdent: string;

  @ApiProperty({
    description: 'identity person',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  numIdent: string;

  @ApiProperty({
    description: 'adviser',
    minimum: 1,
    default: 1,
  })
  @IsNotEmpty()
  adviser: string;
>>>>>>> d40c7c366858bdf9abfea05f4e77985c8f240ba8
}
function IsNotEmptyObjectject(): (
  target: CreateSavingDto,
  propertyKey: 'product',
) => void {
  throw new Error('Function not implemented.');
}
