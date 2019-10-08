import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewKurseComponent } from './overview-kurse.component';

describe('OverviewKurseComponent', () => {
  let component: OverviewKurseComponent;
  let fixture: ComponentFixture<OverviewKurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewKurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewKurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
