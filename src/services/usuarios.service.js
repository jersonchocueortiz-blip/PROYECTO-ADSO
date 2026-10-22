import Usuario from '../models/usuario.model.js';
import { AppError } from '../utils/AppError.js';

export async function crearUsuario(datos) {
const { nombre, correo, rol } = datos;
return Usuario.create({ nombre, correo, rol });
}

export async function listarUsuarios() {
    return Usuario.findAll({ order: [['id', 'ASC']] });
}

export async function obtenerUsuarioPorId(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        throw new AppError('Usuario no encontrado', 404);
    }
    return usuario;
}

export async function actualizarUsuario(id, datos) {
    const usuario = await obtenerUsuarioPorId(id);
    const { nombre, correo, rol } = datos;
    return usuario.update({ nombre, correo, rol: rol ?? usuario.rol });
}

export async function eliminarUsuario(id) {
    const usuario = await obtenerUsuarioPorId(id);
    await usuario.destroy();
}