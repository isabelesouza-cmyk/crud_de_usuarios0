import usuarioServices from "../services/usuario.services.js";

async function createUsuarioController(request, response){
    const novoUsuario = request.body;

    try {
        const usuario = await usuarioServices.createUsuarioServices(novoUsuario);
        response.status(200).send({usuario});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

async function findAllUsuarioController(request, response) {
    try {
        const usuario = await usuarioServices.findAllUsuarioServices();
        response.status(200).send({usuario});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function findUsuarioByIdController(request, response) {

    const {id} = request.params;

    try {
        const usuario = await usuarioServices.findUsuarioByIdServices(id);
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