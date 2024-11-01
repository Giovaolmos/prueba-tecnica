process.loadEnvFile();

export const PORT = process.env.PORT;
export const API_URL = process.env.API_URL;
export const MONGO_URI = process.env.MONGO_URI as string;
