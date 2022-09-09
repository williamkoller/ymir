import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { Book } from '@app/modules/books/schemas/book.schema';

export interface AddBookRepository {
  newBook: (data: AddBookDto) => Promise<Book>;
}
