import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalRequestComponent } from './add-modal-request.component';

describe('AddModalRequestComponent', () => {
  let component: AddModalRequestComponent;
  let fixture: ComponentFixture<AddModalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
