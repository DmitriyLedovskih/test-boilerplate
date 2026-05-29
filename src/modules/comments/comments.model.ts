import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
    @Prop({ required: true, type: Number })
    public postId: number;

    @Prop({ type: String, default: '' })
    public text: string;

    @Prop({ required: true, type: Number, min: 1, max: 5 })
    public rating: number;

    @Prop({ required: true, type: String })
    public author: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
