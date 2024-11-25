import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento de arquivos utilizando o Multer
const storage = multer.diskStorage({
  // Define o destino onde os arquivos serão salvos (ajuste 'uploads/' para sua necessidade)
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Callback com null para erro e 'uploads/' como destino
  },
  // Define o nome do arquivo (considere usar identificadores únicos ou extensões)
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Callback com null para erro e nome original do arquivo
  }
});

// Cria uma instância do Multer com a configuração de armazenamento
const upload = multer({ storage });

// Define as rotas da aplicação
const routes = (app) => {
  // Permite que o servidor interprete requisições com corpo no formato JSON
  app.use(express.json());

  // Rota GET para '/posts' - Busca todos os posts (implementação em listarPosts)
  app.get("/posts", listarPosts);

  // Rota POST para '/posts' - Cria um novo post (implementação em postarNovoPost)
  app.post("/posts", postarNovoPost);

  // Rota POST para '/upload' - Envia uma imagem (implementação em uploadImagem)
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
