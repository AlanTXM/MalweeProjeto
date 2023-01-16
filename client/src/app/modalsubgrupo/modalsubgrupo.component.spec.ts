import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsubgrupoComponent } from './modalsubgrupo.component';

describe('ModalsubgrupoComponent', () => {
  let component: ModalsubgrupoComponent;
  let fixture: ComponentFixture<ModalsubgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsubgrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
