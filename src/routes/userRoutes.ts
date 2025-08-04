import { Router } from 'express';
import * as userController from "../controllers/userController";

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.post('/bulk', userController.createUsers);
userRouter.post('/upsert', userController.createUserUpsert);
userRouter.get('/page/:page', userController.getAllUsers);
userRouter.get('/id/:id', userController.getUser);
userRouter.put('/generic/id/:id', userController.updateUserGeneric);
userRouter.put('/generic/emailDomain/:emailDomain', userController.updateUsers);
userRouter.put('/email/:id', userController.updateEmail);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;