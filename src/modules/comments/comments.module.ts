import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsRepository } from './comments.repository';
import { Comment } from './comments.model';

@Module({
    imports: [TypeOrmModule.forFeature([Comment])],
    controllers: [CommentsController],
    providers: [CommentsService, CommentsRepository],
})
export class CommentsModule {}
