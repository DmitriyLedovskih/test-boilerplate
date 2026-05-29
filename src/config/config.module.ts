import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './config.service';
import configuration, { validationSchema } from './configuration';

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.local', '.env', '.env.example'],
            isGlobal: true,
            load: [configuration],
            validationSchema,
            validationOptions: {
                abortEarly: false,
                allowUnknown: true,
                stripUnknown: true,
            },
            cache: true,
            expandVariables: true,
        }),
    ],
    providers: [AppConfigService],
    exports: [AppConfigService],
})
export class AppConfigModule {}
