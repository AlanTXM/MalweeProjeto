import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcolectionComponent } from './modalcolection.component';

describe('ModalcolectionComponent', () => {
  let component: ModalcolectionComponent;
  let fixture: ComponentFixture<ModalcolectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcolectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcolectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
