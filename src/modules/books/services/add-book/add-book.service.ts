import { BadRequestException, Injectable } from '@nestjs/common';
import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { IAddBookService } from '@app/modules/books/interfaces/add-book-service.interface';
import { BooksRepository } from '@app/modules/books/repositories/books.repository';
import { Book } from '@app/modules/books/schemas/book.schema';

@Injectable()
export class AddBookService implements IAddBookService {
  constructor(private readonly booksRepo: BooksRepository) {}

  public async newBook(data: AddBookDto): Promise<Book> {
    try {
      return await this.booksRepo.newBook(data);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
