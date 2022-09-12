import {
  AddBookRepository,
  FindBooksRepository,
} from '@app/data/protocols/db/books';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AddBookDto } from '@app/modules/books/dtos/add-book.dto';
import { BookEntityMapper } from '@app/modules/books/mappers/book.entity.mapper';
import { Book } from '@app/modules/books/schemas/book.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BooksRepository implements AddBookRepository, FindBooksRepository {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  public async newBook(data: AddBookDto): Promise<Book> {
    const addBook = new this.bookModel(data);
    return BookEntityMapper.toModel(await addBook.save());
  }

  public async findBooks(): Promise<Book[]> {
    const books = await this.bookModel.find({}, { __v: false });
    return BookEntityMapper.toModels(books);
  }
}
