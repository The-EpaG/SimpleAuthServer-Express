import express, { Request, Response } from 'express';
import { version } from '../package.json';
import environment from './environment';
import loginRouter from './routes/api/login';
import authRouter from './routes/api/auth';
import versionRouter from './routes/api/version';
import { errorHandler } from './middleware/errors';
import { notFoundHandler } from './middleware/notFound';
import loginViewRouter from './routes/view/login';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use('/api/login', loginRouter);
app.use('/api/auth', authRouter);
app.use('/api/version', versionRouter);

app.use('/login', loginViewRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(environment.PORT, () => {
  console.log(`Server [${version}] is running on port ${environment.PORT}`);
});
