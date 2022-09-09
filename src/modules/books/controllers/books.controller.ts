import { Body, Controller, Post } from '@nestjs/common';
import { BooksDecorator } from '@app/modules/books/decorators/books.decorator';
import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { IAddBookService } from '@app/modules/books/interfaces/add-book-service.interface';
import { Book } from '@app/modules/books/schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(
    @BooksDecorator() private readonly addBookService: IAddBookService,
  ) {}

  @Post()
  public async newBook(@Body() data: AddBookDto): Promise<Book> {
    return await this.addBookService.newBook(data);
  }
}
