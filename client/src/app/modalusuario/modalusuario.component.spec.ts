import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalusuarioComponent } from './modalusuario.component';

describe('ModalusuarioComponent', () => {
  let component: ModalusuarioComponent;
  let fixture: ComponentFixture<ModalusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
