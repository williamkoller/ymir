import { Book } from '@app/modules/books/schemas/book.schema';

export abstract class BookEntityMapper {
  static toModel(book: Book): Book {
    return {
      _id: book._id,
      name: book.name,
      title: book.title,
      headerDescription: book.headerDescription,
      description: book.description,
      author: book.author,
      yearOfPublication: book.yearOfPublication,
      publishingCompany: book.publishingCompany,
      genre: book.genre,
      active: book.active,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    };
  }

  static toModels(books: Book[]): Book[] {
    return books.map(this.toModel);
  }
}
