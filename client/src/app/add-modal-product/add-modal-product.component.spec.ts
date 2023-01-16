import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalProductComponent } from './add-modal-product.component';

describe('AddModalProductComponent', () => {
  let component: AddModalProductComponent;
  let fixture: ComponentFixture<AddModalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
