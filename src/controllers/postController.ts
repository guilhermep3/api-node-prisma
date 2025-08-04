import { Request, Response } from "express";
import * as postService from "../services/post";
import { validateID, validatePost } from "../middlewares/validations";

export const createPost = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    validatePost(data);
    const post = await postService.createPost(data);
    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao criar um post' });
  }
}

export const getAllPosts = async (req: Request, res: Response) => {
  const page = parseInt(req.params.page);

  try {
    const posts = await postService.getAllPosts(page);
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao retornar todos os posts' });
  }
}

export const getPost = async (req: Request, res: Response) => {

  try {
    const id = validateID(req.params.id);
    const post = await postService.getPost(id);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao retornar um post' });
  }
}

export const updatePostGeneric = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const id = validateID(req.params.id);
    const post = await postService.updatePostGeneric(id, data);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao atualizar um post' });
  }
}

export const deletePost = async (req: Request, res: Response) => {

  try {
    const id = validateID(req.params.id);
    const post = await postService.deletePost(id);
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao deletar post' });
  }
}