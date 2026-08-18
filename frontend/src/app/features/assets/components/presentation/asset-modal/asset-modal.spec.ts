import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetModal } from './asset-modal';

describe('AssetModal', () => {
  let component: AssetModal;
  let fixture: ComponentFixture<AssetModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetModal]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
