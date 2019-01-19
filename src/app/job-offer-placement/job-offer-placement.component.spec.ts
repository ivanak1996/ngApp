import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferPlacementComponent } from './job-offer-placement.component';

describe('JobOfferPlacementComponent', () => {
  let component: JobOfferPlacementComponent;
  let fixture: ComponentFixture<JobOfferPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOfferPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
