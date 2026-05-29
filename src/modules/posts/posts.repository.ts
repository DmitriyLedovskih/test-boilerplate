import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.model';
import { CreatePostDto } from './posts.dto';

@Injectable()
export class PostsRepository {
    constructor(
        @InjectRepository(Post)
        private readonly repository: Repository<Post>
    ) {}

    async create(createPostDto: CreatePostDto): Promise<Post> {
        const post = this.repository.create(createPostDto);
        return await this.repository.save(post);
    }

    async findAll(): Promise<Post[]> {
        return await this.repository.find();
    }
}
