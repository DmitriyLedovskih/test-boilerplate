import { Body, Controller, Get, HttpCode, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, PostResponseDto } from './posts.dto';

@Controller('/posts')
export class PostsController {
    constructor(private readonly PostsService: PostsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body(ValidationPipe) createPostDto: CreatePostDto): Promise<PostResponseDto> {
        return await this.PostsService.create(createPostDto);
    }

    @Get()
    public async findAll(): Promise<PostResponseDto[]> {
        return this.PostsService.findAll();
    }
}
