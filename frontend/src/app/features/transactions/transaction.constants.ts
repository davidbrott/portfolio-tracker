import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiUrl;

export const TRANSACTION_ENDPOINTS = {
  CREATE: `${BASE_URL}/transactions/`,
  GET_ALL_TRANSACTIONS: `${BASE_URL}/transactions/`,
  GET_ALL_ACCOUNTS: `${BASE_URL}/accounts/`
};
