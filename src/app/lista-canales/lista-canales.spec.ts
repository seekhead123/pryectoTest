import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCanales } from './lista-canales';

describe('ListaCanales', () => {
  let component: ListaCanales;
  let fixture: ComponentFixture<ListaCanales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCanales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCanales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
