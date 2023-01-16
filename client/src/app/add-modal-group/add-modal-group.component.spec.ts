import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalGroupComponent } from './add-modal-group.component';

describe('AddModalGroupComponent', () => {
  let component: AddModalGroupComponent;
  let fixture: ComponentFixture<AddModalGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
