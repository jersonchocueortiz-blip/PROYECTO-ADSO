import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Usuario = sequelize.define(
    'Usuario',
    {
        nombre: { type: DataTypes.STRING(100), allowNull: false },
        correo: { type: DataTypes.STRING(150), allowNull: false, unique: true },
        rol: {
            type: DataTypes.ENUM('admin', 'instructor'),
            allowNull: false,
            defaultValue: 'instructor',
        },
    },
    { tableName: 'usuarios' }
);
export default Usuario;