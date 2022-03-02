import { Router } from 'express';
import FileController from '../controllers/FileController';

const router = Router();
router.put('/foto/item/:id', FileController.foto);
router.put('/carnet/item/:id', FileController.carnet);
router.put('/bachiller/item/:id', FileController.bachiller);
router.put('/egreso/item/:id', FileController.egreso);
router.put('/licenciatura/item/:id', FileController.licenciatura);

router.put('/certificado/item/:id', FileController.certificado);
export default router;

