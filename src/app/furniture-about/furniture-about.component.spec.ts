import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureAboutComponent } from './furniture-about.component';

describe('FurnitureAboutComponent', () => {
  let component: FurnitureAboutComponent;
  let fixture: ComponentFixture<FurnitureAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
