import { Component, ElementRef, output, signal, viewChild } from '@angular/core';
import { AssetType } from '../../../enum/asset-type.enum';
import { form, FormField } from '@angular/forms/signals';
import { Modal } from 'bootstrap';
import { Asset } from '../../../models/asset.model';

interface AssetData {
  name: string;
  isin: string;
  ticker: string;
  type: AssetType;
}

@Component({
  selector: 'app-asset-modal',
  imports: [FormField],
  templateUrl: './asset-modal.html',
  styleUrl: './asset-modal.scss'
})
export class AssetModal {
  modal = viewChild<ElementRef>('modal');
  assetModel = signal<AssetData>({
    name: '',
    isin: '',
    ticker: '',
    type: AssetType.ETF
  });

  assetCreated = output<Asset>();

  assetForm = form(this.assetModel);

  assetType = AssetType;

  private bootstrapModal!: Modal;

  open(): void {
    this.bootstrapModal = new Modal(this.modal()!.nativeElement);
    this.bootstrapModal.show();
  }

  createAsset(): void {
    const asset: Asset = {
      ...this.assetModel()
    };

    this.assetCreated.emit(asset);
    this.bootstrapModal.hide();
  }
}
