import { Router } from 'express';
import * as recursosController from '../controllers/recursos.controller.js';
import { validarRecurso } from '../middlewares/validarRecurso.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();

router.post('/', validarRecurso, recursosController.crear);
router.get('/', recursosController.listar);
router.get('/:id', validarId, recursosController.obtener);
router.put('/:id', validarId, validarRecurso, recursosController.actualizar);
router.delete('/:id', validarId, recursosController.eliminar);
export default router;
