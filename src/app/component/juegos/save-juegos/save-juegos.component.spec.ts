import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveJuegosComponent } from './save-juegos.component';

describe('SaveJuegosComponent', () => {
  let component: SaveJuegosComponent;
  let fixture: ComponentFixture<SaveJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveJuegosComponent]
    });
    fixture = TestBed.createComponent(SaveJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
