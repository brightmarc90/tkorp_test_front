import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
/**
 * instance axios pour les requetes
 */
export const AxiosService = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
});