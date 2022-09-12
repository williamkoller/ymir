import { BOOKS_REPOSITORY } from '@app/utils/constants';
import { Inject, Injectable } from '@nestjs/common';
import { IFindBooksService } from '@app/modules/books/interfaces/find-books-service.interface';
import { BooksRepository } from '@app/modules/books/repositories/books.repository';
import { Book } from '@app/modules/books/schemas/book.schema';

@Injectable()
export class FindBooksService implements IFindBooksService {
  constructor(
    @Inject(BOOKS_REPOSITORY) private readonly booksRepo: BooksRepository,
  ) {}

  public async findBooks(): Promise<Book[]> {
    return await this.booksRepo.findBooks();
  }
}
