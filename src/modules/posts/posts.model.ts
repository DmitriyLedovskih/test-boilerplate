import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    text: string;
}
