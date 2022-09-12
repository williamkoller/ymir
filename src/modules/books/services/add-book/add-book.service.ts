import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { IAddBookService } from '@app/modules/books/interfaces/add-book-service.interface';
import { BooksRepository } from '@app/modules/books/repositories/books.repository';
import { Book } from '@app/modules/books/schemas/book.schema';
import { BOOKS_REPOSITORY } from '@app/utils/constants';

@Injectable()
export class AddBookService implements IAddBookService {
  private logger = new Logger(AddBookService.name);
  constructor(
    @Inject(BOOKS_REPOSITORY) private readonly booksRepo: BooksRepository,
  ) {}

  public async newBook(data: AddBookDto): Promise<Book> {
    try {
      return await this.booksRepo.newBook(data);
    } catch (e) {
      this.logger.error(`${JSON.stringify(e)}`);
      if (e.code === 11000)
        throw new ConflictException(
          `This Book name [${e.keyValue.name}] already exists`,
        );
    }
  }
}
