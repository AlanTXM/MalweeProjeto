import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalSubgroupComponent } from './add-modal-subgroup.component';

describe('AddModalSubgroupComponent', () => {
  let component: AddModalSubgroupComponent;
  let fixture: ComponentFixture<AddModalSubgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalSubgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
