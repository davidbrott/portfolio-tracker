import { AssetType } from '../enum/asset-type.enum';

export interface GroupedAsset {
  name: string;
  isin: string;
  ticker: string;
  type: AssetType;
  amount: number;
  quantity: number;
  unitPrice: number;
}
