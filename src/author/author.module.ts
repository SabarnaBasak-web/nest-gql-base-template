import { Module } from '@nestjs/common';
import { AuthorsResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsResolver, AuthorService],
})
export class AuthorModule {}
