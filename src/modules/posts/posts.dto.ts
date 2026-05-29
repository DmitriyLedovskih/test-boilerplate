import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({
        description: 'Заголовок поста',
        example: 'Заголовок',
        minLength: 1,
        maxLength: 200,
    })
    @IsString()
    @IsNotEmpty({ message: 'Заголовок не может быть пустым' })
    @Length(1, 200, { message: 'Заголовок должен быть от 1 до 200 символов' })
    title: string;

    @ApiProperty({
        description: 'Содержание поста',
        example: 'Содержание',
        minLength: 1,
        maxLength: 5000,
    })
    @IsString()
    @IsNotEmpty({ message: 'Содержание не может быть пустым' })
    @Length(1, 5000, { message: 'Содержание должно быть от 1 до 5000 символов' })
    text: string;
}

export class PostResponseDto {
    @ApiProperty({
        description: 'Уникальный идентификатор поста',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @Expose()
    id: string;

    @ApiProperty({
        description: 'Заголовок поста',
        example: 'Заголовок',
    })
    @Expose()
    title: string;

    @ApiProperty({
        description: 'Содержание поста',
        example: 'Содержание',
    })
    @Expose()
    text: string;

    @ApiProperty({
        description: 'Дата создания поста',
        example: '2024-01-01T12:00:00.000Z',
    })
    @Expose()
    createdAt: Date;

    @ApiProperty({
        description: 'Дата последнего обновления поста',
        example: '2024-01-01T12:30:00.000Z',
    })
    @Expose()
    updatedAt: Date;
}
