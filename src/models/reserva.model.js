import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Reserva = sequelize.define(
    'Reserva',
    {
        fechaInicio: { type: DataTypes.DATE, allowNull: false },
        fechaFin: { type: DataTypes.DATE, allowNull: false },
        motivo: { type: DataTypes.STRING(200), allowNull: true },
        estado: {
            type: DataTypes.ENUM('activa', 'cancelada'),
            allowNull: false,
            defaultValue: 'activa',
        },
    },
    { tableName: 'reservas' }
);
export default Reserva;