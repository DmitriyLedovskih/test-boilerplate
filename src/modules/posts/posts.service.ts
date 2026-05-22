import { PostsRepository } from './posts.repository';

export class PostsService {
    constructor(private readonly postsRepository: PostsRepository) {}

    public async create(): Promise<void> {}

    public async findAll(): Promise<void> {}
}
