import { Router } from 'express';
import rideRoutes from './rideRoutes ';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../../config/swaggerConfig';

const router = Router();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use('/ride', rideRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;