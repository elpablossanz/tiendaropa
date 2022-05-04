import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruComponent } from './carru.component';

describe('CarruComponent', () => {
  let component: CarruComponent;
  let fixture: ComponentFixture<CarruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
