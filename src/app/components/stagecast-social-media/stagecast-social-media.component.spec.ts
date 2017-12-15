import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagecastSocialMediaComponent } from './stagecast-social-media.component';

describe('StagecastSocialMediaComponent', () => {
  let component: StagecastSocialMediaComponent;
  let fixture: ComponentFixture<StagecastSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagecastSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagecastSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
