import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateCommentDto {
    @IsNotEmpty({ message: 'postId не может быть пустым' })
    @IsInt()
    postId: number;

    @IsNotEmpty({ message: 'text не может быть пустым' })
    @IsString()
    text: string;

    @IsNotEmpty({ message: 'rating не может быть пустым' })
    @IsInt()
    @Min(1, { message: 'rating должен быть от 1 до 5' })
    @Max(5, { message: 'rating должен быть от 1 до 5' })
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
