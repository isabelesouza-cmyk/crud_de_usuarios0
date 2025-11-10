import usuarioService from "../services/usuario.services.js";

async function createUsuarioController(request, response){
    const novoUsuario = request.body;

    try {
        const usuario = await usuarioService.createUsuarioService(novoUsuario);
        response.status(201).send({usuario});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

async function findAllUsuarioController(request, response) {
    try {
        const usuario = await usuarioService.findAllUsuarioService();
        response.status(200).send({usuario});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function findUsuarioByIdController(request, response) {

    const {id} = request.params;

    try {
        const usuario = await usuarioService.findUsuarioByIdService(id);
        response.status(200).send({usuario});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function updateUsuarioController(request, response) {
    
    const {id} = request.params;
    const novoUsuario = request.body;

    try {
        const usuario = await usuarioService.updateUsuarioService(id, novoUsuario);
        response.status(201).send({usuario});
    } catch(error) {
        response.status(400).send(error.message);
    }

}

export default {
    createUsuarioController,
    findAllUsuarioController,
    findUsuarioByIdController,
    updateUsuarioController
}