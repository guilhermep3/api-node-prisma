export const validateUser = (user) => {
  if (!user || !user.name || !user.email || !user.age) {
    throw new Error('Dados incorretos. Nome e email são obrigatórios.');
  }
}

export const validateID = (id) => {
  const parsedId = parseInt(id);
  if (!parsedId || isNaN(parsedId)) {
    throw new Error('ID Inválido.');
  } else {
    return parsedId;
  }
}

export const validatePost = (post) => {
  if (!post || !post.title || !post.body) {
    throw new Error('Dados incorretos. Title e body são obrigatórios.');
  }
}