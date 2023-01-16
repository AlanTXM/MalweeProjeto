import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSubgrupoComponent } from './lista-subgrupo.component';

describe('ListaSubgrupoComponent', () => {
  let component: ListaSubgrupoComponent;
  let fixture: ComponentFixture<ListaSubgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSubgrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
