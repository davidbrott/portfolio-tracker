const BASE_URL = 'http://localhost:8080/api';

export const ACCOUNT_ENDPOINTS = {
    GET_ALL: `${BASE_URL}/accounts/`,
    CREATE: `${BASE_URL}/accounts/`,
    DELETE: (id: number) => `${BASE_URL}/accounts/${id}`
}