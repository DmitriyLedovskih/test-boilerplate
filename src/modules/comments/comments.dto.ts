import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, Min, Max, ValidateIf, Length } from 'class-validator';

export class CreateCommentDto {
    @IsNotEmpty({ message: 'postId не может быть пустым' })
    @IsInt()
    postId: number;

    @ValidateIf((o) => o.rating >= 2 && o.rating <= 4)
    @IsNotEmpty({ message: 'При оценке от 2 до 4 баллов текст отзыва обязателен' })
    @IsString({ message: 'text должен быть строкой' })
    @Length(10, 1000, { message: 'Текст отзыва должен содержать не менее 10 символов' })
    @Expose()
    text?: string;

    @IsNotEmpty({ message: 'rating не может быть пустым' })
    @IsInt({ message: 'rating должен быть числом' })
    @Min(1, { message: 'rating должен быть от 1 до 5' })
    @Max(5, { message: 'rating должен быть от 1 до 5' })
    @Expose()
    rating: number;

    @IsNotEmpty({ message: 'author не может быть пустым' })
    @IsString({ message: 'author должен быть строкой' })
    author: string;
}

export class CommentResponseDto {
    @Expose()
    id: string;

    @Expose()
    postId: number;

    @Expose()
    text: string;

    @Expose()
    rating: number;

    @Expose()
    author: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

    constructor(partial: Partial<CommentResponseDto>) {
        Object.assign(this, partial);
    }
}
