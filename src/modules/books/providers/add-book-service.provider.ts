import { Provider } from '@nestjs/common';
import { AddBookService } from '@app/modules/books/services/add-book/add-book.service';

export const ADD_BOOK_SERVICE_PROVIDER_ID = 'ADD_BOOK_SERVICE_PROVIDER_ID';

export const AddBookServiceProvider: Provider<AddBookService> = {
  provide: ADD_BOOK_SERVICE_PROVIDER_ID,
  useClass: AddBookService,
};
