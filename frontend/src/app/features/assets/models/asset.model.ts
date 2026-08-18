import { AssetType } from '../enum/asset-type.enum';

export interface Asset {
  id?: number;
  name: string;
  isin: string;
  ticker: string;
  type: AssetType;
}
