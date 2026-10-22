import { body } from 'express-validator';
import { validarResultado } from './validarResultado.js';

export const validarUsuario = [
    body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
    body('correo').trim().notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('El correo no tiene un formato válido')
        .customSanitizer((valor) => valor.toLowerCase()),
    body('rol').optional()
        .isIn(['admin', 'instructor']).withMessage('El rol debe ser admin o instructor'),
    validarResultado,
];