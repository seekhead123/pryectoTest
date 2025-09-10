import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujarApi } from './dibujar-api';

describe('DibujarApi', () => {
  let component: DibujarApi;
  let fixture: ComponentFixture<DibujarApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DibujarApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DibujarApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
