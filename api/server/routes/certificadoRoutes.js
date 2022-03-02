import { Router } from 'express';
import CertificadoController from '../controllers/CertificadoController';

const router = Router();
/** Simples */
router.get('/data/:pagina/:num/:prop/:orden',CertificadoController.getData)
router.post('/:tipo', CertificadoController.crear);
router.put('/:id/:tipo',CertificadoController.actualizar)
router.get('/item/:id',CertificadoController.getItem)

export default router;
