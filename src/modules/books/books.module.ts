import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './controllers/books.controller';
import { AddBookServiceProvider } from './providers/add-book-service.provider';
import { BooksRepository } from './repositories/books.repository';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
  providers: [BooksRepository, AddBookServiceProvider],
  controllers: [BooksController],
})
export class BooksModule {}
