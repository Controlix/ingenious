import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalCreateDialogComponent } from './goal-create-dialog.component';

describe('GoalCreateDialogComponent', () => {
  let component: GoalCreateDialogComponent;
  let fixture: ComponentFixture<GoalCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
