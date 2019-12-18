import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgameformComponent } from './editgameform.component';

describe('EditgameformComponent', () => {
  let component: EditgameformComponent;
  let fixture: ComponentFixture<EditgameformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgameformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgameformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
