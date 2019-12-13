import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteBtnComponent } from './upvote-btn.component';

describe('UpvoteBtnComponent', () => {
  let component: UpvoteBtnComponent;
  let fixture: ComponentFixture<UpvoteBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvoteBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvoteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
