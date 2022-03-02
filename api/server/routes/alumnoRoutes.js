import { Router } from 'express';
import AlumnoController from '../controllers/AlumnoController';

const router = Router();
/** Simples */
router.get('/data/:pagina/:num/:prop/:orden',AlumnoController.getData)
router.get('/item/:id',AlumnoController.getItem)
router.get('/item/copiar/:id',AlumnoController.setCopiar)
router.delete('/:id/:tipo',AlumnoController.getDelete)
router.put('/:id/:tipo',AlumnoController.actualizar)
router.post('/search/lista',AlumnoController.search)

router.post('/:tipo', AlumnoController.crear);

export default router;
