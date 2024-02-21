import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async addAuthor(firstName: string, lastName: string): Promise<Author> {
    return await this.authorRepository.save({
      firstName: firstName,
      lastName: lastName,
    });
  }
}
