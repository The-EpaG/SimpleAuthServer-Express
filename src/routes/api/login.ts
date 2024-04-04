import { Router, Request, Response } from 'express';
import environment from '../../environment';
import jwt from 'jsonwebtoken';


const loginRouter = Router();

loginRouter.post('/', (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    if (username !== environment.USERNAME || password !== environment.PASSWORD) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }


    const token = jwt.sign({ username: username }, environment.JWT_SECRET, { expiresIn: '24h' });

    res.cookie('token', token, { httpOnly: true , sameSite: 'strict' });
    res.sendStatus(200);
});

export default loginRouter;