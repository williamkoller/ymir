import { Book } from '@app/modules/books/schemas/book.schema';

export interface IFindBooksService {
  findBooks: () => Promise<Book[]>;
}
