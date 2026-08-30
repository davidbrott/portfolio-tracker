import { environment } from '../../environments/environment';

const BASE_URL = environment.apiUrl;

export const APPLICATION_ENDPOINTS = {
  GET_SETTINGS: `${BASE_URL}/settings/`
};
