import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { IAddBookService } from '@app/modules/books/interfaces/add-book-service.interface';
import { Book } from '@app/modules/books/schemas/book.schema';
import { AddBookDecorator } from '@app/modules/books/decorators/add-book.decorator';
import { FindBooksDecorator } from '@app/modules/books/decorators/find-books.decorator';
import { IFindBooksService } from '@app/modules/books/interfaces/find-books-service.interface';

@Controller('books')
export class BooksController {
  constructor(
    @AddBookDecorator() private readonly addBookService: IAddBookService,
    @FindBooksDecorator() private readonly findBooksService: IFindBooksService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async store(@Body() addBookDto: AddBookDto): Promise<Book> {
    return await this.addBookService.newBook(addBookDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<Book[]> {
    return await this.findBooksService.findBooks();
  }
}
