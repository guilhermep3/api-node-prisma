import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from 'cors';
import { mainRouter } from "./routes/main";

const server = express();
const port = process.env.PORT || 3000;

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(urlencoded({ extended: true }));
server.disable('x-powered-by');

server.use(mainRouter);

server.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
})