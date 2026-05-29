import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentResponseDto, CreateCommentDto } from './comments.dto';

@Controller('/comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async create(@Body() createCommentDto: CreateCommentDto): Promise<CommentResponseDto> {
        return this.commentsService.create(createCommentDto);
    }

    @Get('/:id')
    public async findAllByPostID(@Param('id') postId: number): Promise<CommentResponseDto[]> {
        return this.commentsService.findAllByPostID(postId);
    }
}
