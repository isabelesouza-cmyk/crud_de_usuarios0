import express from "express";
import usuariosRouters from "./src/routes/usuario.routes.js";

const app = express();

app.use(express.json());
app.use(usuariosRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});