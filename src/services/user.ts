import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
  const user = prisma.user.create({
    data
  });
  return user;
}

export const createUsers = async (data: Prisma.UserCreateInput[]) => {
  const user = prisma.user.createMany({ data });
  return user;
}

export const createUserUpsert = async (email: string, data: Prisma.UserCreateInput) => {
  const user = prisma.user.upsert({
    where: {
      email
    },
    update: {
      name: data.name
    },
    create: data
  })
  return user;
}

export const getAllUsers = async (page: number) => {
  const take = 20;
  const skip = (page - 1) * take;

  const users = await prisma.user.findMany({
    skip,
    take
  })

  return users;
}

export const getUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id }
  })

  return user;
}

export const updateUserGeneric = async (id: number, data: Prisma.UserCreateInput) => {
  const updatedUser = prisma.user.update({
    where: {
      id
    },
    data
  })

  return updatedUser;
}

export const updateUsers = async (emailEnds: string, data: any) => {
  const updatedUsers = prisma.user.updateMany({
    where: {
      email: {
        endsWith: emailEnds
      }
    },
    data: data
  })

  return updatedUsers;
}

export const updateEmail = async (id: number, email: string) => {
  const updatedUser = await prisma.user.update({
    where: {
      id
    },
    data: {
      email: email
    }
  })

  return updatedUser;
}

export const deleteUser = async (id: number) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id
    }
  })

  return deletedUser;
}