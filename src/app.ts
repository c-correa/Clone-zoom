import express from 'express';
import productRoutes from './products/product.routes';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: 'https://technical-test-api-node.onrender.com', // Cambia con tu dominio
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
  }));

app.use(express.json());
app.use('/products', productRoutes);

export default app;
