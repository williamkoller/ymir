import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import environment, { environment as envs } from '@app/shared/environment';
import { BooksModule } from '@app/modules/books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: environment.filepath,
      load: [envs],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('mongoUrl'),
      }),
    }),
    forwardRef(() => BooksModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
