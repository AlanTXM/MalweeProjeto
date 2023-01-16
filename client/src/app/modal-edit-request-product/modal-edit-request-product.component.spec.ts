import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditRequestProductComponent } from './modal-edit-request-product.component';

describe('ModalEditRequestProductComponent', () => {
  let component: ModalEditRequestProductComponent;
  let fixture: ComponentFixture<ModalEditRequestProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditRequestProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditRequestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
