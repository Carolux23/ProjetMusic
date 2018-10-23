import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InGenreComponent } from './in-genre.component';

describe('InGenreComponent', () => {
  let component: InGenreComponent;
  let fixture: ComponentFixture<InGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
