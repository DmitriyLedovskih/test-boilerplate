import * as Joi from 'joi';

export interface AppConfig {
    NODE_ENV: string;
    PORT: number;
    POSTGRES_HOST: string;
    POSTGRES_PORT: number;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    MONGO_URI: string;
}

export const validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').default('development').required(),
    PORT: Joi.number().integer().port().default(3000).required(),
    POSTGRES_HOST: Joi.string().hostname().default('localhost').required(),
    POSTGRES_PORT: Joi.number().integer().port().default(5432).required(),
    POSTGRES_USER: Joi.string().min(1).required(),
    POSTGRES_PASSWORD: Joi.string().min(1).required(),
    POSTGRES_DB: Joi.string().min(1).required(),
    MONGO_URI: Joi.string()
        .pattern(/^mongodb(\+srv)?:\/\/.+/)
        .required()
        .messages({
            'string.pattern.base': 'MONGO_URI must be a valid MongoDB connection string',
        }),
});

export default () => ({
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '3000', 10),
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
    POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    POSTGRES_USER: process.env.POSTGRES_USER || '',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
    POSTGRES_DB: process.env.POSTGRES_DB || '',
    MONGO_URI: process.env.MONGO_URI || '',
});
