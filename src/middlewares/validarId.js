import { param } from 'express-validator';
import { validarResultado } from './validarResultado.js';

export const validarId = [
    param('id').isInt({ min: 1 }).withMessage('El id debe ser un entero positivo').toInt(),
    validarResultado,
];