import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKursComponent } from './detail-kurs.component';

describe('DetailKursComponent', () => {
  let component: DetailKursComponent;
  let fixture: ComponentFixture<DetailKursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailKursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
