import { Router } from 'express';
import * as usuariosController from '../controllers/usuarios.controller.js';
import { validarUsuario } from '../middlewares/validarUsuario.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();

router.post('/', validarUsuario, usuariosController.crear);
router.get('/', usuariosController.listar);
router.get('/:id', validarId, usuariosController.obtener);
router.put('/:id', validarId, validarUsuario, usuariosController.actualizar);
router.delete('/:id', validarId, usuariosController.eliminar);

export default router;