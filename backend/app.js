import express from 'express';
import productRoutes from "./routes/productRoutes.js";
import response from "./utils/response.js";
import {handleGlobalError} from "./utils/error.js";

const app = express();

/**
 * allow JSON Data in the req. body with limitation of 80KB
 */
app.use(express.json({ limit: '10kb' }));

/**
 * all routers
 */
app.get('/', (req, res) => {
    res.send('home page');
})
app.use('/api/v1/products', productRoutes);


/**
 * Global error Handler Middleware
 */
app.use(handleGlobalError);

/**
 * UnHandled Page
 */
app.all('*', (req, res) => {
    response(res).notFound('the page is not found')
})

export default app;