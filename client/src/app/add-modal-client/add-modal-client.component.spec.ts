import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalClientComponent } from './add-modal-client.component';

describe('AddModalClientComponent', () => {
  let component: AddModalClientComponent;
  let fixture: ComponentFixture<AddModalClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
