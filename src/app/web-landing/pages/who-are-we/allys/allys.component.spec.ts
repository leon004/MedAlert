import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllysComponent } from './allys.component';

describe('AllysComponent', () => {
  let component: AllysComponent;
  let fixture: ComponentFixture<AllysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
