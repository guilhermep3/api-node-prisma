import { Router } from 'express';
import userRouter from './userRoutes';
import postRouter from './postRoutes';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
  res.json({ pong: true });
});

mainRouter.use('/users', userRouter);
mainRouter.use('/posts', postRouter);