import { config } from "dotenv";

config();

export const API_PORT = process.env.API_PORT;
export const DB_PORT = process.env.DB_PORT;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
