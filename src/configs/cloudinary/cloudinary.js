import { v2 as cloudinary } from 'cloudinary';

console.log(process.env.cloudinary_api_key);
    // Configuration
    cloudinary.config();

export default cloudinary;