import { environment } from "../../../environments/environment";

const BASE_URL = environment.apiUrl;

export const TRANSACTION_ENDPOINTS = {
    CREATE: `${BASE_URL}/transactions/`,
    GET_ALL: `${BASE_URL}/transactions/`
}