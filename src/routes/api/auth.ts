import { Router, Request, Response } from 'express';
import environment from '../../environment';
import jwt from 'jsonwebtoken';


const authRouter = Router();

authRouter.get('/', (req: Request, res: Response, next: Function) => {
    if (!req.cookies) {
        return res.status(401).json({ error: 'Unauthorized: No cookies found' });
    }

    if (!("token" in req.cookies)) {
        return res.status(401).json({ error: 'Unauthorized: No token found' });
    }

    let token = req.cookies.token as string;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token missing' });
    }

    jwt.verify(token, environment.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        res.sendStatus(200);
    });
});

export default authRouter;