import { environment } from '../../../environments/environment';

const BASE_URL = environment.apiUrl;

export const ACCOUNT_ENDPOINTS = {
  GET_ALL: `${BASE_URL}/accounts/`,
  CREATE: `${BASE_URL}/accounts/`,
  DELETE: (id: number) => `${BASE_URL}/accounts/${id}`
};
