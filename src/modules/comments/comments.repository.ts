import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './comments.model';
import { CreateCommentDto } from './comments.dto';

@Injectable()
export class CommentsRepository {
    constructor(
        @InjectModel(Comment.name)
        private readonly commentModel: Model<CommentDocument>
    ) {}

    async create(createCommentDto: CreateCommentDto): Promise<Comment> {
        const data = {
            ...createCommentDto,
            text: createCommentDto.text || '',
        };
        const newComment = new this.commentModel(data);
        return newComment.save();
    }

    async findAllByPostID(postId: number): Promise<Comment[]> {
        return this.commentModel.find({ postId }).exec();
    }
}
