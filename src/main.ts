import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('port');
  const nodeEnv = config.get<string>('nodeEnv');

  logger.log(`environment: [${JSON.stringify(config)}]`);

  await app.listen(port, () =>
    logger.log(`Server running in mode: ${nodeEnv}`),
  );
}
bootstrap();
