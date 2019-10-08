import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWeekComponent } from './overview-week.component';

describe('OverviewWeekComponent', () => {
  let component: OverviewWeekComponent;
  let fixture: ComponentFixture<OverviewWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
