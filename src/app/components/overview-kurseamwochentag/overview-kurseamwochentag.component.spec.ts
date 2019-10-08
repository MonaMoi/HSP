import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewKurseamwochentagComponent } from './overview-kurseamwochentag.component';

describe('OverviewKurseamwochentagComponent', () => {
  let component: OverviewKurseamwochentagComponent;
  let fixture: ComponentFixture<OverviewKurseamwochentagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewKurseamwochentagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewKurseamwochentagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
