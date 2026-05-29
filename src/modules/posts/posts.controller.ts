import { Body, Controller, Get, HttpCode, HttpStatus, Post, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, PostResponseDto } from './posts.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('/posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Создать новый пост',
        description: 'Создает новый пост с указанными заголовком и содержанием',
    })
    @ApiBody({ type: CreatePostDto })
    @ApiCreatedResponse({
        description: 'Пост успешно создан',
        type: PostResponseDto,
    })
    @ApiBadRequestResponse({
        description: 'Неверные данные. Заголовок или содержание не могут быть пустыми',
    })
    public async create(@Body(ValidationPipe) createPostDto: CreatePostDto): Promise<PostResponseDto> {
        return await this.postsService.create(createPostDto);
    }

    @Get()
    @ApiOperation({
        summary: 'Получить все посты',
        description: 'Возвращает список всех постов',
    })
    @ApiOkResponse({
        description: 'Список постов успешно получен',
        type: [PostResponseDto],
    })
    public async findAll(): Promise<PostResponseDto[]> {
        return this.postsService.findAll();
    }
}
