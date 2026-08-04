import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Autorise le Frontend React à contacter le Backend NestJS (CORS)
  app.enableCors();

  // Active la validation automatique des DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Configuration de la Documentation Swagger
  const config = new DocumentBuilder()
    .setTitle('DISTAR PERF API')
    .setDescription('API REST pour la gestion des séances de coaching sportif et paiements')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`🚀 Serveur NestJS démarré sur : http://localhost:3000`);
  console.log(`📚 Documentation Swagger accessible sur : http://localhost:3000/api/docs`);
}
bootstrap();