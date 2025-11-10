import usuarioController from "../controller/usuario.controller.js";
import {Router} from "express";

const usuarioRouter = Router();

usuarioRouter.post("/usuario", usuarioController.createUsuarioController);

export default usuarioRouter;