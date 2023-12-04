import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsolaComponent } from './update-consola.component';

describe('UpdateConsolaComponent', () => {
  let component: UpdateConsolaComponent;
  let fixture: ComponentFixture<UpdateConsolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateConsolaComponent]
    });
    fixture = TestBed.createComponent(UpdateConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
