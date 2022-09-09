import { Inject } from '@nestjs/common';
import { ADD_BOOK_SERVICE_PROVIDER_ID } from '@app/modules/books/providers/add-book-service.provider';

export const BooksDecorator = () => Inject(ADD_BOOK_SERVICE_PROVIDER_ID);
