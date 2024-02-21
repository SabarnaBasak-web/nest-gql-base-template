import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorController } from './author/author.controller';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    AuthorModule,
  ],
  controllers: [AppController, AuthorController],
  providers: [AppService],
})
export class AppModule {}
