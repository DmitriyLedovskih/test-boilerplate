import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { CreateCommentDto, CommentResponseDto } from './comments.dto';

@Injectable()
export class CommentsService {
    constructor(private readonly commentsRepository: CommentsRepository) {}

    public async create(createCommentDto: CreateCommentDto): Promise<CommentResponseDto> {
        const commentData = {
            ...createCommentDto,
            text: createCommentDto.text || '',
        };

        const comment = await this.commentsRepository.create(commentData);
        return new CommentResponseDto({
            id: (comment as any)._id?.toString(),
            postId: comment.postId,
            text: comment.text || '',
            rating: comment.rating,
            author: comment.author,
            createdAt: (comment as any).createdAt,
            updatedAt: (comment as any).updatedAt,
        });
    }

    public async findAllByPostID(postId: number): Promise<CommentResponseDto[]> {
        const comments = await this.commentsRepository.findAllByPostID(postId);
        return comments.map(
            (comment) =>
                new CommentResponseDto({
                    id: (comment as any)._id?.toString(),
                    postId: comment.postId,
                    text: comment.text || '',
                    rating: comment.rating,
                    author: comment.author,
                    createdAt: (comment as any).createdAt,
                    updatedAt: (comment as any).updatedAt,
                })
        );
    }
}
