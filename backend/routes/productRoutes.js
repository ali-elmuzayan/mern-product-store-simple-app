import express from 'express';
import {
    createProduct,
    getAllProducts,
    deleteProduct,
    getOneProduct,
    updateProduct
} from './../controllers/productController.js'




const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getOneProduct).patch(updateProduct).delete(deleteProduct);

export default router;