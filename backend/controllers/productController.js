import Product from "../models/product.model.js";
import response from "../utils/response.js";
import mongoose from "mongoose";
import {catchError} from "../utils/error.js";


/**
 * create one product
 */
export const createProduct = catchError(async (req, res, next) => {
    const sendResponse = response(res);

    const productData = req.body;

    if (!productData.name || !productData.price || !productData.img)
        response.badRequest( 'Please provide all required fields');

    const product = await Product.create({
        name: productData.name,
        price: productData.price,
        img: productData.img,
        description: productData.description || ''
    });

    sendResponse.createdSuccess( product, 'Product created successfully');
})

/**
 * get all the products
 */
export const getAllProducts = catchError(async (req, res, next) => {
        // handle the responses
        const sendResponse = response(res);

        const products = await Product.find();

        if (products.length > 0) sendResponse.success(products);
        else sendResponse.noData('no data at the products')
});


/**
 * get one product
 */
export const getOneProduct = catchError(async (req, res, next) => {
    const sendResponse = response(res);
    const {id} = req.params;

    // some validation
    if (!id)  return sendResponse.badRequest( 'id is required');
    if (!mongoose.Types.ObjectId.isValid(id)) return sendResponse.badRequest( 'id is invalid');

    const product = await Product.findById(id);
    sendResponse.success(product, 'product found successfully');

})


/**
 * update the product
 */
export const updateProduct = catchError(async (req, res, next) => {
    const sendResponse = response(res);
    const {id} = req.params;

    // some validation
    if (!id)  return sendResponse.badRequest( 'id is required');
    if (!mongoose.Types.ObjectId.isValid(id)) return sendResponse.badRequest( 'id is invalid');


    const newProductData = req.body;

    const product = await Product.findByIdAndUpdate(id, newProductData, {new: true});
    sendResponse.success(product, 'product updated successfully');
})

/**
 * delete product
 */
export const deleteProduct = async (req, res) => {
        const {id} = req.params;

        if (!id)  return badRequest(res, 'id is required');
        if (!mongoose.Types.ObjectId.isValid(id)) return badRequest(res, 'id is invalid');


}



