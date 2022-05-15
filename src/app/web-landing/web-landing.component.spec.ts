import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLandingComponent } from './web-landing.component';

describe('WebLandingComponent', () => {
  let component: WebLandingComponent;
  let fixture: ComponentFixture<WebLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
