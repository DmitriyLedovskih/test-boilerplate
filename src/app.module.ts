import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comments/comments.module';
import { AppConfigService } from './config/config.service';
import { AppConfigModule } from './config/config.module';

@Module({
    imports: [
        AppConfigModule,
        TypeOrmModule.forRootAsync({
            imports: [],
            useFactory: (configService: AppConfigService) => ({
                type: 'postgres',
                host: configService.postgresHost,
                port: configService.postgresPort,
                username: configService.postgresUser,
                password: configService.postgresPassword,
                database: configService.postgresDatabase,
                autoLoadEntities: true,
                synchronize: configService.isDevelopment,
                logging: configService.isDevelopment,
            }),
            inject: [AppConfigService],
        }),
        MongooseModule.forRootAsync({
            useFactory: (configService: AppConfigService) => ({
                uri: configService.mongoUri,
            }),
            inject: [AppConfigService],
        }),
        PostsModule,
        CommentsModule,
    ],
    providers: [AppConfigService],
    exports: [AppConfigService],
})
export class AppModule {}
