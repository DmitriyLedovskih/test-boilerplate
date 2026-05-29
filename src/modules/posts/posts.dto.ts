import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty({ message: 'Заголовок не может быть пустым' })
    title: string;

    @IsString()
    @IsNotEmpty({ message: 'Содержание не может быть пустым' })
    text: string;
}

export class PostResponseDto {
    @Expose()
    id: string;

    @Expose()
    title: string;

    @Expose()
    text: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}
