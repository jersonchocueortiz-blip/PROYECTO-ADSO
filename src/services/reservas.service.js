import { Op } from 'sequelize';
import { Recurso, Usuario, Reserva } from '../models/index.js';
import { AppError } from '../utils/AppError.js';

async function existeCruce(recursoId, fechaInicio, fechaFin, excluirReservaId = null) {
const where = {
    recursoId,
    estado: 'activa',
    fechaInicio: { [Op.lt]: fechaFin },
    fechaFin: { [Op.gt]: fechaInicio },
};


if (excluirReservaId) {
    where.id = { [Op.ne]: excluirReservaId };
}
const cruce = await Reserva.findOne({ where });
return cruce !== null;
}

export async function crearReserva(datos) {
const { recursoId, usuarioId, fechaInicio, fechaFin, motivo } = datos;

const recurso = await Recurso.findByPk(recursoId);
if (!recurso) throw new AppError('Recurso no encontrado', 404);
if (!recurso.activo) throw new AppError('El recurso no está disponible para reservas', 409);
const usuario = await Usuario.findByPk(usuarioId);
if (!usuario) throw new AppError('Usuario no encontrado', 404);
if (await existeCruce(recursoId, fechaInicio, fechaFin)) {
    throw new AppError('El recurso ya está reservado en ese horario', 409);
}
return Reserva.create({ recursoId, usuarioId, fechaInicio, fechaFin, motivo });
}