import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, Min, Max, ValidateIf, Length } from 'class-validator';

export class CreateCommentDto {
    @ApiProperty({
        description: 'ID поста, к которому относится комментарий',
        example: 1,
        minimum: 1,
        type: Number,
    })
    @IsNotEmpty()
    @IsInt()
    postId: number;

    @ApiPropertyOptional({
        description: 'Текст комментария. Обязателен при оценке от 2 до 4 баллов (минимум 10 символов)',
        example: 'Текст комментария',
        minLength: 10,
        maxLength: 1000,
    })
    @ValidateIf((o) => o.rating >= 2 && o.rating <= 4)
    @IsNotEmpty({ message: 'При оценке от 2 до 4 баллов текст отзыва обязателен' })
    @IsString({ message: 'text должен быть строкой' })
    @Length(10, 1000, { message: 'Текст отзыва должен содержать не менее 10 символов' })
    @Expose()
    text?: string;

    @ApiProperty({
        description: 'Оценка комментария (от 1 до 5)',
        example: 5,
        minimum: 1,
        maximum: 5,
        enum: [1, 2, 3, 4, 5],
    })
    @IsNotEmpty({ message: 'rating не может быть пустым' })
    @IsInt({ message: 'rating должен быть числом' })
    @Min(1, { message: 'rating должен быть от 1 до 5' })
    @Max(5, { message: 'rating должен быть от 1 до 5' })
    @Expose()
    rating: number;

    @ApiProperty({
        description: 'Автор комментария',
        example: 'Автор',
        maxLength: 100,
    })
    @IsNotEmpty({ message: 'author не может быть пустым' })
    @IsString({ message: 'author должен быть строкой' })
    author: string;
}

export class CommentResponseDto {
    @ApiProperty({
        description: 'Уникальный идентификатор комментария',
        example: '60d21b4667d0d8992e610c85',
    })
    @Expose()
    id: string;

    @ApiProperty({
        description: 'ID поста',
        example: 1,
    })
    @Expose()
    postId: number;

    @ApiProperty({
        description: 'Текст комментария',
        example: 'Текст комментария',
        required: false,
    })
    @Expose()
    text: string;

    @ApiProperty({
        description: 'Оценка комментария',
        example: 5,
        minimum: 1,
        maximum: 5,
    })
    @Expose()
    rating: number;

    @ApiProperty({
        description: 'Автор комментария',
        example: 'Автор',
    })
    @Expose()
    author: string;

    @ApiProperty({
        description: 'Дата создания комментария',
        example: '2024-01-01T12:00:00.000Z',
    })
    @Expose()
    createdAt: Date;

    @ApiProperty({
        description: 'Дата последнего обновления комментария',
        example: '2024-01-01T12:30:00.000Z',
    })
    @Expose()
    updatedAt: Date;

    constructor(partial: Partial<CommentResponseDto>) {
        Object.assign(this, partial);
    }
}
