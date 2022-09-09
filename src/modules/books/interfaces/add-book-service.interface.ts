import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { Book } from '@app/modules/books/schemas/book.schema';

export interface IAddBookService {
  newBook: (data: AddBookDto) => Promise<Book>;
}
