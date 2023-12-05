import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJuegosComponent } from './detail-juegos.component';

describe('DetailJuegosComponent', () => {
  let component: DetailJuegosComponent;
  let fixture: ComponentFixture<DetailJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailJuegosComponent]
    });
    fixture = TestBed.createComponent(DetailJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
