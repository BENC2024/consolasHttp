import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveConsolasComponent } from './save-consolas.component';

describe('SaveConsolasComponent', () => {
  let component: SaveConsolasComponent;
  let fixture: ComponentFixture<SaveConsolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveConsolasComponent]
    });
    fixture = TestBed.createComponent(SaveConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
