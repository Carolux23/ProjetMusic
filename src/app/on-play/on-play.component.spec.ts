import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPlayComponent } from './on-play.component';

describe('OnPlayComponent', () => {
  let component: OnPlayComponent;
  let fixture: ComponentFixture<OnPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
