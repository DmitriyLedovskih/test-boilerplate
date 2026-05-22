import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
    constructor(private readonly commentsRepository: CommentsRepository) {}

    public async create(): Promise<void> {}

    public async findAllByPostID(): Promise<void> {}
}
