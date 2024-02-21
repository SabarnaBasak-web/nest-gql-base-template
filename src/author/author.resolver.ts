import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from './author.model';

@Resolver()
export class AuthorsResolver {
  constructor(private authorService: AuthorService) {}
  @Query(() => String)
  async hello() {
    return 'hello from nestjs';
  }

  @Query(() => [Author])
  async getAllAuthors() {
    return await this.authorService.findAll();
  }

  @Mutation(() => Author)
  async addAuthor(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    return await this.authorService.addAuthor(firstName, lastName);
  }
}
