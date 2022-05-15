import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllyTypesComponent } from './ally-types.component';

describe('AllyTypesComponent', () => {
  let component: AllyTypesComponent;
  let fixture: ComponentFixture<AllyTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllyTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
