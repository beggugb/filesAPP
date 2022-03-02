import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();
router.post('/login', UsuarioController.login);
router.get('/list/:prop/:orden', UsuarioController.getItems);
export default router;
