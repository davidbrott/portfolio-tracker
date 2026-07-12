import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Price } from '../models/price.model';
import { Observable } from 'rxjs';
import { ASSET_ENDPOINTS } from '../asset.constants';
import { Asset } from '../models/asset.model';

@Service()
export class AssetService {
    private readonly http = inject(HttpClient);

    // createPrice(price: Price): Observable<Price> {
    //     return this.http.post<Price>(PRICE_ENDPOINTS.CREATE, price);
    // }

    createAsset(asset: Asset): Observable<Asset> {
        return this.http.post<Asset>(ASSET_ENDPOINTS.CREATE_ASSET, asset);
    }

    getAllAssets(): Observable<Asset[]> {
        return this.http.get<Asset[]>(ASSET_ENDPOINTS.GET_ALL_ASSETS);
    }
}
