import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
    constructor(private readonly PostsService: PostsService) {}

    @Post()
    public async create(): Promise<void> {
        return this.PostsService.create();
    }

    @Get()
    public async findAll(): Promise<void> {
        return this.PostsService.findAll();
    }
}
