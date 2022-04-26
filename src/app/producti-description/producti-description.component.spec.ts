import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiDescriptionComponent } from './producti-description.component';

describe('ProductiDescriptionComponent', () => {
  let component: ProductiDescriptionComponent;
  let fixture: ComponentFixture<ProductiDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductiDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
