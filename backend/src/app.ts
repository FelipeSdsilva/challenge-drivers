import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import express from 'express';
import router from './common/routes';
import { errorHandler } from './common/middlewares/errorHandler';
import { notFoundRequest } from './common/middlewares/notFoundRequest';

const app = express();

dotenv.config();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: "*",
}));

app.use('/', router);
app.use(notFoundRequest);
app.use(errorHandler);

export default app; 
