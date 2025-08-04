import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

export const createPost = async (data: Prisma.PostCreateInput) => {
  const post = prisma.post.create({
    data
  })

  return post;
}

export const getAllPosts = async (page: number) => {
  const take = 5;
  const skip = (page - 1) * take;

  const post = await prisma.post.findMany({
    skip,
    take
  })

  return post;
}

export const getPost = async (id: number) => {
  const post = await prisma.post.findUnique({
    where: { id }
  })

  return post;
}

export const updatePostGeneric = async (id: number, data: Prisma.PostCreateInput) => {
  const post = await prisma.post.update({
    where: { id },
    data
  })

  return post;
}

export const deletePost = async (id: number) => {
  const postDeleted = await prisma.post.delete({
    where: { id }
  })

  return postDeleted;
}