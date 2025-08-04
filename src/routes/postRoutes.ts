import { Router } from "express";
import * as postController from "../controllers/postController";

const postRouter = Router();

postRouter.post('/', postController.createPost);
postRouter.get('/page/:page', postController.getAllPosts);
postRouter.get('/id/:id', postController.getPost);
postRouter.put('/:id', postController.updatePostGeneric);
postRouter.delete('/:id', postController.deletePost);

export default postRouter;