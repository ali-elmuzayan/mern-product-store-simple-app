import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';



const envPath = path.resolve('./.env');
const envContent = fs.readFileSync(envPath, 'utf-8')



// Only parse the variables in the .env file
const ENV = dotenv.parse(envContent);

export default ENV;
