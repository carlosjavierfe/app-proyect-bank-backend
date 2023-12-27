import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'email person',
    minimum: 1,
    default: 'email@person.com',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'psw person',
    minimum: 1,
    default: 7777777,
  })
  @IsNotEmpty()
  psw: string;

  @ApiProperty({
    description: 'description person',
    minimum: 1,
    default: '',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'phone person',
    minimum: 1,
    default: +57,
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
}
function IsNotEmptyObjectject(): (
  target: CreateUserDto,
  propertyKey: 'user',
) => void {
  throw new Error('Function not implemented.');
}
