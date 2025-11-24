import usuarioRepository from "../repositories/usuario.repository.js";

async function createUsuarioServices(novoUsuario) {
    const usuario = await usuarioRepository.createUsuarioRepository(novoUsuario);

    if (!usuario) {
        throw new Error ("Erro ao criar novo usuário!")
    }

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

async function updateUsuarioServices(id, novoUsuario) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("Usuário não encontrado!");
    }

    const usuarioAtualizado = await usuarioRepository.updateUsuarioRepository(id, novoUsuario);

    if (!usuarioAtualizado) {
        throw new Error("Erro ao atualizar o usuário!");
    }
    
    return usuarioAtualizado;
}

async function deleteUsuarioServices(id) {
    const usuario = await usuarioRepository.findUsuarioByIdRepository(id);

    if (!usuario) {
        throw new Error("Produto não encontrado!");
    }

    const mensagemRetorno =  await usuarioRepository.deleteUsuarioRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar produto!");
    }

    return mensagemRetorno;
}

export default {
    createUsuarioServices,
    findAllUsuarioServices,
    findUsuarioByIdServices,
    updateUsuarioServices,
    deleteUsuarioServices
}