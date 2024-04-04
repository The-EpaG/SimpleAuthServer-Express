import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    USERNAME: process.env.USER_NAME || 'admin',
    PASSWORD: process.env.PASSWORD || 'password',
    ENVIRONMENT: process.env.ENVIRONMENT || 'prod',
}