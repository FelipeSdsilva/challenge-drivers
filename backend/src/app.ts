import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swaggerConfig';

const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use(helmet());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PATH"],
    credentials: true
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
