import { body } from 'express-validator';
import { validarResultado } from './validarResultado.js';

const validarFechas = [
body('fechaInicio')
    .notEmpty().withMessage('La fecha de inicio es obligatoria')
    .isISO8601().withMessage('La fecha de inicio debe tener formato ISO 8601')
    .toDate(),
body('fechaFin')
    .notEmpty().withMessage('La fecha de fin es obligatoria')
    .isISO8601().withMessage('La fecha de fin debe tener formato ISO 8601')
    .toDate()
    .custom((fechaFin, { req }) => {
        if (fechaFin <= req.body.fechaInicio) {
            throw new Error('La fecha de fin debe ser posterior a la fecha de inicio');
        }
        return true;
    }),

body('motivo').optional().trim()
    .isLength({ max: 200 }).withMessage('El motivo no puede superar los 200 caracteres'),
];

export const validarCrearReserva = [
    body('recursoId').isInt({ min: 1 }).withMessage('recursoId debe ser un entero positivo').toInt(),
    body('usuarioId').isInt({ min: 1 }).withMessage('usuarioId debe ser un entero positivo').toInt(),
    ...validarFechas,
    validarResultado,
];
export const validarReprogramarReserva = [...validarFechas, validarResultado];