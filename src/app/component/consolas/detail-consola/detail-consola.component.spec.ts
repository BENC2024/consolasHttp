import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConsolaComponent } from './detail-consola.component';

describe('DetailConsolaComponent', () => {
  let component: DetailConsolaComponent;
  let fixture: ComponentFixture<DetailConsolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailConsolaComponent]
    });
    fixture = TestBed.createComponent(DetailConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
