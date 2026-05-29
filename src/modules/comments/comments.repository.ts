import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comments.model';

@Injectable()
export class CommentsRepository {
    constructor(
        @InjectRepository(Comment)
        private readonly commentModel: Repository<Comment>
    ) {}
}
