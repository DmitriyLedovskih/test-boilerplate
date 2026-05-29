import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) {}

    get nodeEnv(): string {
        return this.configService.get<string>('NODE_ENV', 'development');
    }

    get port(): number {
        return this.configService.get<number>('PORT', 3000);
    }

    get postgresHost(): string {
        return this.configService.get<string>('POSTGRES_HOST', 'localhost');
    }

    get postgresPort(): number {
        return this.configService.get<number>('POSTGRES_PORT', 5432);
    }

    get postgresUser(): string {
        return this.configService.get<string>('POSTGRES_USER', '');
    }

    get postgresPassword(): string {
        return this.configService.get<string>('POSTGRES_PASSWORD', '');
    }

    get postgresDatabase(): string {
        return this.configService.get<string>('POSTGRES_DB', '');
    }

    get mongoUri(): string {
        return this.configService.get<string>('MONGO_URI', '');
    }

    get isDevelopment(): boolean {
        return this.nodeEnv === 'development';
    }

    get isProduction(): boolean {
        return this.nodeEnv === 'production';
    }
}
