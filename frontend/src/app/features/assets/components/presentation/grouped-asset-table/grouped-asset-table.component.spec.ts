import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedAssetTableComponent } from './grouped-asset-table.component';

describe('GroupedAssetTableComponent', () => {
  let component: GroupedAssetTableComponent;
  let fixture: ComponentFixture<GroupedAssetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedAssetTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupedAssetTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
