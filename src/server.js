import app from './app.js';
import sequelize from './config/database.js';
import { Recurso, Usuario, Reserva } from './models/index.js';
import { AppError } from './utils/AppError.js';

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await sequelize.authenticate();
        console.log('Conexión a PostgreSQL establecida');
        await sequelize.sync();
        console.log('Tablas sincronizadas');
        app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });

    } 
    catch (error) {
        console.error('No se pudo conectar a la base de datos:', error.message);
        process.exit(1);
    }
}

const incluirRelaciones = [
{ model: Recurso, as: 'recurso', attributes: ['id', 'nombre', 'tipo'] },
{ model: Usuario, as: 'usuario', attributes: ['id', 'nombre', 'correo'] },
];
export async function listarReservas({ recursoId, usuarioId, estado } = {}) {
    const where = {};
    if (recursoId) where.recursoId = recursoId;
    if (usuarioId) where.usuarioId = usuarioId;
    if (estado) where.estado = estado;

    return Reserva.findAll({ where, include: incluirRelaciones, order: [['fechaInicio', 'ASC']] });
}
export async function obtenerReservaPorId(id) {
    const reservas = await Reserva.findByPk(id, { include: incluirRelaciones });
    if (!reservas) throw new AppError('Reserva no encontrada', 404);
    return reservas;
}
iniciarServidor();