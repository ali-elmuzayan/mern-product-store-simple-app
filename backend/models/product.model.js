import mongoose from 'mongoose';
import {Schema} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, 'price should be added ']
    },
    img: String,
    description: String,
}, {
    timestamps: true,
})

const Product = mongoose.model('Tour', productSchema);

export default Product;