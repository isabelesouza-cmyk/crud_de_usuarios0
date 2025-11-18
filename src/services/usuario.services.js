import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuarioServices(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);
    return usuario;
}

async function findAllUsuarioServices() {
    const usuario = await usuarioRepository.findAllUsuarioRepository();
    return usuario;
}

async function findUsuarioByIdServices(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("Usuário não encontrado!");
    }
    
    return usuario;
}

export default {
    createUsuarioServices,
    findAllUsuarioServices,
    findUsuarioByIdServices
}