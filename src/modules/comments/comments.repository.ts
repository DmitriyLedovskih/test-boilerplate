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
        const newComment = new this.commentModel(createCommentDto);
        return newComment.save();
    }

    async findAllByPostID(postId: number): Promise<Comment[]> {
        return this.commentModel.find({ postId }).exec();
    }
}
