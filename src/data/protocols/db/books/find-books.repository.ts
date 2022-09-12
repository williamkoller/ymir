import { Book } from '@app/modules/books/schemas/book.schema';

export interface FindBooksRepository {
  findBooks: () => Promise<Book[]>;
}
