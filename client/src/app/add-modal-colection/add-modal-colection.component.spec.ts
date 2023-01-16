import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalColectionComponent } from './add-modal-colection.component';

describe('AddModalColectionComponent', () => {
  let component: AddModalColectionComponent;
  let fixture: ComponentFixture<AddModalColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
