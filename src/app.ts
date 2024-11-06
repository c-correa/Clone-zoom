import express from 'express';
import productRoutes from './products/product.routes';
import cors from 'cors';
const app = express();

app.use(cors());


app.use(express.json());
app.use('/products', productRoutes);

export default app;
