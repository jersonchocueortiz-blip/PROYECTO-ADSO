import * as recursosService from '../services/recursos.service.js';

export async function crear(req, res) {
const recurso = await recursosService.crearRecurso(req.body);
res.status(201).json(recurso);
}
export async function listar(req, res) {
    const recursos = await recursosService.listarRecursos(req.query);
    res.status(200).json(recursos);
}
export async function obtener(req, res) {
    const recurso = await recursosService.obtenerRecursoPorId(req.params.id);
    res.status(200).json(recurso);
}
export async function actualizar(req, res) {
    const recurso = await recursosService.actualizarRecurso(req.params.id, req.body);
    res.status(200).json(recurso);
}
export async function eliminar(req, res) {
    await recursosService.eliminarRecurso(req.params.id);
    res.status(200).json({ mensaje: 'Recurso eliminado correctamente' });
}