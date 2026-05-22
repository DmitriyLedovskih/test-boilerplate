import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './posts.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsRepository {
    constructor(
        @InjectRepository(Post)
        private readonly postModel: Repository<Post>
    ) {}
}
