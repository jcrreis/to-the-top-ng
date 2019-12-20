import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategameformComponent } from './creategameform.component';

describe('CreategameformComponent', () => {
  let component: CreategameformComponent;
  let fixture: ComponentFixture<CreategameformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreategameformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategameformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
