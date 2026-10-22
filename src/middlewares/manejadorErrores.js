import { AppError } from '../utils/AppError.js';

export function rutaNoEncontrada(req, res, next) {
  next(new AppError(`Ruta no encontrada: ${req.method} ${req.originalUrl}`, 404));
}
export function manejadorErrores(err, req, res, next) {
    if (err instanceof AppError) {
        return res.status(err.estado).json({
        error: err.message,
        ...(err.detalles && { detalles: err.detalles }),
    });
}

if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({
    error: 'Ya existe un registro con ese valor',
    detalles: err.errors.map((e) => ({ campo: e.path, mensaje: e.message })),
  });
}


if (err.name === 'SequelizeValidationError') {
    return res.status(400).json({
    error: 'Datos inválidos',
    detalles: err.errors.map((e) => ({ campo: e.path, mensaje: e.message })),
  });
}

if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'El cuerpo de la petición no es un JSON válido' });
}

console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
}