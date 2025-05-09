import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.js';


const app = express();
const PORT = process.env.PORT||8080;
mongoose.set('strictQuery', false); // Esto evita el warning deprecado

const connection = mongoose.connect(`mongodb+srv://lokitan74138:1LGCC9ryZkanEJ1J@cluster0.cstf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)



app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));




app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
