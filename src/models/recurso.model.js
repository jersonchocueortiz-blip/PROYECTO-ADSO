import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Recurso = sequelize.define(
'Recurso',
{
nombre: { type: DataTypes.STRING(100), allowNull: false, unique: true },
tipo: { type: DataTypes.STRING(50), allowNull: false },
capacidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
},
{ tableName: 'recursos'}
);

export default Recurso;