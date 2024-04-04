import { Router, Request, Response } from 'express';

const loginViewRouter = Router();

loginViewRouter.get('/', (req: Request, res: Response) => {
    res.render('index.ejs');
});

export default loginViewRouter;