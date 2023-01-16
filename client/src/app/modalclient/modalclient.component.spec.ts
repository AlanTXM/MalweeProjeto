import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalclientComponent } from './modalclient.component';

describe('ModalclientComponent', () => {
  let component: ModalclientComponent;
  let fixture: ComponentFixture<ModalclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
