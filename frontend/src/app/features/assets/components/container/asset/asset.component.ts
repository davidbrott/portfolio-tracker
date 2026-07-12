import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { FeatureHeader } from "../../../../../shared/components/feature-header/feature-header.component";
import { AssetTable } from "../../presentation/asset-table/asset-table";
import { AssetService } from '../../../services/asset.service';
import { Asset } from '../../../models/asset.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AssetModal } from '../../presentation/asset-modal/asset-modal';

@Component({
  selector: 'app-asset',
  imports: [FeatureHeader, AssetTable, AssetModal],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss',
})
export class AssetComponent implements OnInit {
  assetModal = viewChild<AssetModal>('assetModal');
  assets = signal<Asset[]>([]);
  
  private readonly assetService = inject(AssetService);

  ngOnInit(): void {
    this.loadAssets();
  }

  openAssetModal(): void {
    this.assetModal()?.open();
  }

  createAsset(asset: Asset): void {
    this.assetService.createAsset(asset).subscribe({
      next: (asset: Asset) => this.assets.update(assets => [...assets, asset]),
      error: (error: HttpErrorResponse) => console.error('An error occurred while creating a new asset', error)
    })
  }

  private loadAssets(): void {
    this.assetService.getAllAssets().subscribe({
      next: (assets: Asset[]) => this.assets.set(assets),
      error: (error: HttpErrorResponse) => console.error('An error occurred while requesting the assets', error)
    })
  }
}
