import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { randomUUID } from 'crypto';
export type BookDocument = Book & Document;

@Schema({
  collection: 'books',
  timestamps: true,
  autoIndex: true,
})
export class Book {
  @Prop({
    type: String,
    required: true,
    default: () => randomUUID(),
  })
  _id!: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: String,
    required: false,
  })
  headerDescription?: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
  })
  author: string;

  @Prop({
    type: Number,
    required: true,
  })
  yearOfPublication: number;

  @Prop({
    type: String,
    required: true,
  })
  publishingCompany: string;

  @Prop({
    type: String,
    required: true,
  })
  genre: string;

  @Prop({
    type: Boolean,
    required: true,
    default: true,
  })
  active: boolean;

  @Prop({
    type: Date,
  })
  createdAt: Date;

  @Prop({
    type: Date,
  })
  updatedAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
