import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatHappenModalComponent } from './what-happen-modal.component';

describe('WhatHappenModalComponent', () => {
  let component: WhatHappenModalComponent;
  let fixture: ComponentFixture<WhatHappenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatHappenModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatHappenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
