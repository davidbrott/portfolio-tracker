import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-feature-header',
  imports: [],
  templateUrl: './feature-header.component.html',
  styleUrl: './feature-header.component.scss'
})
export class FeatureHeader {
  title = input.required<string>();
  btnLabel = input.required<string>();

  create = output<void>();
}
