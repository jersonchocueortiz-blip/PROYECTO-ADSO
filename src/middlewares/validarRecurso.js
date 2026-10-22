import { body } from 'express-validator';
import { validarResultado } from './validarResultado.js';

export const validarRecurso = [
    body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ max: 100 }).withMessage('El nombre no puede superar los 100 caracteres'),
    body('tipo').trim().notEmpty().withMessage('El tipo es obligatorio'),
    body('capacidad').optional()
        .isInt({ min: 1 }).withMessage('La capacidad debe ser un entero mayor o igual a 1').toInt(),
    body('activo').optional()
        .isBoolean().withMessage('El campo activo debe ser true o false').toBoolean(),
    validarResultado,
];