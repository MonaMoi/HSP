import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTopkursComponent } from './detail-topkurs.component';

describe('DetailTopkursComponent', () => {
  let component: DetailTopkursComponent;
  let fixture: ComponentFixture<DetailTopkursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTopkursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTopkursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
