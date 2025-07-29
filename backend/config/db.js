import ENV from "./env.js";
import mongoose from "mongoose";


/**
 * Database Username
 */
const DB_USERNAME = ENV.DATABASE_USERNAME || 'ROOT';


/**
 * Database Password
 */
const DB_PASSWORD = ENV.DATABASE_PASSWORD || '';


/**
 * Database Name
 */
const DB_NAME = ENV.DATABASE_NAME || 'root';


/**
 * 
 * @type {string|string}
 */
const DB_CONN = ENV.DATABASE_CONNECTION || 'mongodb';

 const DB = `${DB_CONN}://${DB_USERNAME}:${DB_PASSWORD}@${DB_NAME}.t4rc1xy.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`;


/**
 * connect to the database
 */

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

}

export default DB;

