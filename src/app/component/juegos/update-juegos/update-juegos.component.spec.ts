import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJuegosComponent } from './update-juegos.component';

describe('UpdateJuegosComponent', () => {
  let component: UpdateJuegosComponent;
  let fixture: ComponentFixture<UpdateJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateJuegosComponent]
    });
    fixture = TestBed.createComponent(UpdateJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
