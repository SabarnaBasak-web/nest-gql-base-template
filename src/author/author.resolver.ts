import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthorsResolver {
  @Query(() => String)
  async hello() {
    return 'hello from nestjs';
  }
}
