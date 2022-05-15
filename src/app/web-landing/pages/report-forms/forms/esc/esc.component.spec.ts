import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscComponent } from './esc.component';

describe('EscComponent', () => {
  let component: EscComponent;
  let fixture: ComponentFixture<EscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
