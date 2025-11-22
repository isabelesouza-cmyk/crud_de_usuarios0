import usuarioController from "../controller/usuario.controller.js";
import {Router} from "express";

const usuarioRouter = Router();

usuarioRouter.post("/usuario", usuarioController.createUsuarioController);
usuarioRouter.get("/usuario", usuarioController.findAllUsuarioController);
usuarioRouter.get("/usuario/:id", usuarioController.findUsuarioByIdController);
usuarioRouter.put("/usuario/:id", usuarioController.updateUsuarioController)

export default usuarioRouter;