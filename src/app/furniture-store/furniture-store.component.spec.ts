import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureStoreComponent } from './furniture-store.component';

describe('FurnitureStoreComponent', () => {
  let component: FurnitureStoreComponent;
  let fixture: ComponentFixture<FurnitureStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
