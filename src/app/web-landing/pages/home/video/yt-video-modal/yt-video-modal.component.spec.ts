import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtVideoModalComponent } from './yt-video-modal.component';

describe('YtVideoModalComponent', () => {
  let component: YtVideoModalComponent;
  let fixture: ComponentFixture<YtVideoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtVideoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtVideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
