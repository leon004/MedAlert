import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportMaterialComponent } from './support-materialcomponent';

describe('SupportMaterialComponent', () => {
  let component: SupportMaterialComponent;
  let fixture: ComponentFixture<SupportMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
