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
}
function IsNotEmptyObjectject(): (
  target: CreateSavingDto,
  propertyKey: 'product',
) => void {
  throw new Error('Function not implemented.');
}
