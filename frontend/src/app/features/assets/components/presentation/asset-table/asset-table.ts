import { Component, input } from '@angular/core';
import { Asset } from '../../../models/asset.model';

@Component({
  selector: 'app-asset-table',
  imports: [],
  templateUrl: './asset-table.html',
  styleUrl: './asset-table.scss'
})
export class AssetTable {
  assets = input.required<Asset[]>();
}
