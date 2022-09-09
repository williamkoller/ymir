import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddBookDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly headerDescription: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly yearOfPublication: number;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsString()
  @IsNotEmpty()
  readonly publishingCompany: string;

  @IsString()
  @IsNotEmpty()
  readonly genre: string;
}
