import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";

// port
const start = async () => {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  // app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("MyTicket Project")
    .setDescription("MyTicket Rest API")
    .setVersion("1.0")
    .addTag("NestJs,swagger,Validation,Sequalize")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  await app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};
start();
