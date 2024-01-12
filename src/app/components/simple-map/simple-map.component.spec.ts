import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMapComponent } from './simple-map.component';

describe('SimpleMapComponent', () => {
  let component: SimpleMapComponent;
  let fixture: ComponentFixture<SimpleMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleMapComponent]
    });
    fixture = TestBed.createComponent(SimpleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
