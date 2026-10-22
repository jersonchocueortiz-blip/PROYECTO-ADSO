import * as usuariosService from '../services/usuarios.service.js';

export async function crear(req, res) {
    const usuario = await usuariosService.crearUsuario(req.body);
    res.status(201).json(usuario);
}
export async function listar(req, res) {
    const usuarios = await usuariosService.listarUsuarios();
    res.status(200).json(usuarios);
}
export async function obtener(req, res) {
    const usuario = await usuariosService.obtenerUsuarioPorId(req.params.id);
    res.status(200).json(usuario);
}
export async function actualizar(req, res) {
    const usuario = await usuariosService.actualizarUsuario(req.params.id, req.body);
    res.status(200).json(usuario);
}
export async function eliminar(req, res) {
    await usuariosService.eliminarUsuario(req.params.id);
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
}