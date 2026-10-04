import { Component, input } from '@angular/core';
import { GroupedAsset } from '../../../models/grouped-asset.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-grouped-asset-table',
  imports: [TranslatePipe],
  templateUrl: './grouped-asset-table.component.html'
})
export class GroupedAssetTableComponent {
  groupedAssets = input.required<GroupedAsset[]>();
}
