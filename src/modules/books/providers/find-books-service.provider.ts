import { Provider } from '@nestjs/common';
import { FindBooksService } from '../services/find-books/find-books.service';

export const FIND_BOOKS_SERVICE_PROVIDER_ID = 'FIND_BOOKS_SERVICE_PROVIDER_ID';

export const FindBooksServiceProvider: Provider<FindBooksService> = {
  provide: FIND_BOOKS_SERVICE_PROVIDER_ID,
  useClass: FindBooksService,
};
