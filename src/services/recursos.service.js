import Recurso from '../models/recurso.model.js';
import { AppError } from '../utils/AppError.js';

export async function crearRecurso(datos) {
const { nombre, tipo, capacidad } = datos;
return Recurso.create({ nombre, tipo, capacidad });
}
export async function listarRecursos({ tipo, activo } = {}) {
    const where = {};
    if (tipo) where.tipo = tipo;
    if (activo !== undefined) where.activo = activo === 'true';

     return Recurso.findAll({ where, order: [['id', 'ASC']] });
}
export async function obtenerRecursoPorId(id) {
    const recurso = await Recurso.findByPk(id);
    if (!recurso) {
        throw new AppError('Recurso no encontrado', 404);
    }

    return recurso;

}
export async function actualizarRecurso(id, datos) {
const recurso = await obtenerRecursoPorId(id);
const { nombre, tipo, capacidad, activo } = datos;

return recurso.update({
    nombre,
    tipo,
    capacidad: capacidad ?? recurso.capacidad,
    activo: activo ?? recurso.activo,
});
}

export async function eliminarRecurso(id) {
    const recurso = await obtenerRecursoPorId(id);
    await recurso.destroy();
}