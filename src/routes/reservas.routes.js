import { Router } from 'express';
import * as reservasController from '../controllers/reservas.controller.js';
import { validarCrearReserva, validarReprogramarReserva } from '../middlewares/validarReserva.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();

router.post('/', validarCrearReserva, reservasController.crear);
router.get('/', reservasController.listar);
router.get('/:id', validarId, reservasController.obtener);

export default router;