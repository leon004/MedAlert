import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsModalComponent } from './what-is-modal.component';

describe('WhatIsModalComponent', () => {
  let component: WhatIsModalComponent;
  let fixture: ComponentFixture<WhatIsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
