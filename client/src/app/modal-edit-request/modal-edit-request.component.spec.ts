import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditRequestComponent } from './modal-edit-request.component';

describe('ModalEditRequestComponent', () => {
  let component: ModalEditRequestComponent;
  let fixture: ComponentFixture<ModalEditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
