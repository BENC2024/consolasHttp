import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsolasComponent } from './list-consolas.component';

describe('ListConsolasComponent', () => {
  let component: ListConsolasComponent;
  let fixture: ComponentFixture<ListConsolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListConsolasComponent]
    });
    fixture = TestBed.createComponent(ListConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
