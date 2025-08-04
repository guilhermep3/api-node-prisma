import { Router } from "express";
import * as postController from "../controllers/postController";

const postsRouter = Router();

postsRouter.post('/', postController.createPost);
postsRouter.get('/:page', postController.getAllPosts);
postsRouter.get('/:id', postController.getPost);
postsRouter.put('/:id', postController.updatePostGeneric);
postsRouter.delete('/:id', postController.deletePost);

export default postsRouter;