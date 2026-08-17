import { environment } from "../../../environments/environment";

const BASE_URL = environment.apiUrl;

export const ASSET_ENDPOINTS = {
    CREATE_ASSET: `${BASE_URL}/assets/`,
    CREATE_PRICE: `${BASE_URL}/prices/`,
    GET_ALL_ASSETS: `${BASE_URL}/assets/`,
    GET_ALL_BY_ASSET: (assetId: number) =>  `${BASE_URL}/prices/${assetId}`
}