import { Request, Response } from "express";
import { validateID, validateUser } from "../middlewares/validations";
import * as userService from "../services/user"
import { Prisma } from "../generated/prisma";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    validateUser(data);
    const user = await userService.createUser(data);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao criar usuário ou email já existente' });
  }
}

export const createUsers = async (req: Request, res: Response) => {
  const data = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Formato de dados de usuário inválido.' });
  }

  try {
    const users = await userService.createUsers(data);
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao criar usuários' });
  }
}

export const createUserUpsert = async (req: Request, res: Response) => {
  const data: Prisma.UserCreateInput = req.body;
  const email = data.email;
  if (!data) {
    return res.status(400).json({ error: 'Erro ao enviar dados do usuário' });
  };

  try {
    validateUser(data);
    const user = await userService.createUserUpsert(email, data);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao criar ou atualizar usuário' });
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  const page = parseInt(req.params.page);

  try {
    const users = await userService.getAllUsers(page);
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao retornar os usuários' });
  }
}

export const getUser = async (req: Request, res: Response) => {

  try {
    const id = validateID(parseInt(req.params.id));
    const user = await userService.getUser(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao selecionar usuário pelo ID' });
  }
}

export const updateUserGeneric = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const id = validateID(parseInt(req.params.id));
    const user = await userService.updateUserGeneric(id, data);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao atualizar os dados do usuário' });
  }
}

export const updateUsers = async (req: Request, res: Response) => {
  const emailDomain = req.params.emailDomain;
  const data = req.body;

  if (!emailDomain) return res.status(400).json({ error: 'domínio do email é obrigatório' });

  try {
    const user = await userService.updateUsers(emailDomain, data);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao atualizar os dados dos usuários' });
  }
}

export const updateEmail = async (req: Request, res: Response) => {
  const email = req.body.email;

  try {
    const id = validateID(parseInt(req.params.id));
    const user = await userService.updateEmail(id, email);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao atualizar os dados do usuário' });
  }
}

export const deleteUser = async (req: Request, res: Response) => {

  try {
    const id = validateID(parseInt(req.params.id));
    const user = await userService.deleteUser(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso.', user });
  } catch (error) {
    res.status(500).json({ error, message: 'Erro ao deletar usuário.' });
  }
}