import axios from "axios";

axios.defaults.headers.common['Cache-Control'] = 'no-cache';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "https://projetoGabarita A.I..vercel.app/api/",
  headers: {
    'Content-Type': 'application/json',
  }
});