import Recurso from './recurso.model.js';
import Usuario from './usuario.model.js';
import Reserva from './reserva.model.js';

Recurso.hasMany(Reserva, {
    foreignKey: { name: 'recursoId', allowNull: false },
    as: 'reservas',
});
Reserva.belongsTo(Recurso, {
    foreignKey: { name: 'recursoId', allowNull: false },
    as: 'recurso',
 });

Usuario.hasMany(Reserva, {
    foreignKey: { name: 'usuarioId', allowNull: false },
    as: 'reservas',
    onDelete: 'RESTRICT',
});
Reserva.belongsTo(Usuario, {
    foreignKey: { name: 'usuarioId', allowNull: false },
    as: 'usuario',
 });
export { Recurso, Usuario, Reserva };