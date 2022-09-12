import { Inject } from '@nestjs/common';
import { FIND_BOOKS_SERVICE_PROVIDER_ID } from '@app/modules/books/providers/find-books-service.provider';

export const FindBooksDecorator = () => Inject(FIND_BOOKS_SERVICE_PROVIDER_ID);
