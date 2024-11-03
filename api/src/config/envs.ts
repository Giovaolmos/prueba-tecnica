process.loadEnvFile();

export const PORT = process.env.PORT || 3000;
export const API_URL = process.env.API_URL;
export const MONGO_URI = process.env.MONGO_URI;
export const SECRET_KEY = process.env.SECRET_KEY;
export const JWT_SECRET = process.env.JWT_SECRET;
