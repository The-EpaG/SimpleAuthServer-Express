import { version } from '../../../package.json';
import { Router, Request, Response } from 'express';

const versionRouter = Router();

versionRouter.get('/', (req: Request, res: Response) => {
    res.json({ version });
});

export default versionRouter;