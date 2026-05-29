import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentResponseDto, CreateCommentDto } from './comments.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('/comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Создать новый комментарий',
        description: 'Создает новый комментарий. При оценке 2-4 баллов текст обязателен (минимум 10 символов).',
    })
    @ApiBody({ type: CreateCommentDto })
    @ApiCreatedResponse({
        description: 'Комментарий успешно создан',
        type: CommentResponseDto,
    })
    @ApiBadRequestResponse({ description: 'Неверные данные. Например: оценка 2-4 без текста или текст менее 10 символов' })
    public async create(@Body() createCommentDto: CreateCommentDto): Promise<CommentResponseDto> {
        return this.commentsService.create(createCommentDto);
    }

    @Get('/:id')
    @ApiOperation({
        summary: 'Получить все комментарии поста',
        description: 'Возвращает список всех комментариев для указанного поста',
    })
    @ApiParam({
        name: 'postId',
        type: Number,
        required: true,
        description: 'ID поста',
        example: 1,
    })
    @ApiOkResponse({
        description: 'Список комментариев успешно получен',
        type: [CommentResponseDto],
    })
    @ApiBadRequestResponse({
        description: 'Неверный postId (должен быть положительным числом)',
    })
    public async findAllByPostID(@Param('id') postId: number): Promise<CommentResponseDto[]> {
        return this.commentsService.findAllByPostID(postId);
    }
}
