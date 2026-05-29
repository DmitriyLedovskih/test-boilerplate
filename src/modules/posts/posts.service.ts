import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';
import { CreatePostDto, PostResponseDto } from './posts.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PostsService {
    constructor(private readonly postsRepository: PostsRepository) {}

    public async create(createPostDto: CreatePostDto): Promise<PostResponseDto> {
        const post = await this.postsRepository.create(createPostDto);
        return plainToInstance(PostResponseDto, post, { excludeExtraneousValues: true });
    }

    public async findAll(): Promise<PostResponseDto[]> {
        const posts = await this.postsRepository.findAll();
        return plainToInstance(PostResponseDto, posts, { excludeExtraneousValues: true });
    }
}
