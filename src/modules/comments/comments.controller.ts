import { Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller()
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    public async create(): Promise<void> {
        return this.commentsService.create();
    }

    @Get()
    public async findAllByPostID(): Promise<void> {
        return this.commentsService.findAllByPostID();
    }
}
