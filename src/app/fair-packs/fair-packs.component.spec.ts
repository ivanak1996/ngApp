import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairPacksComponent } from './fair-packs.component';

describe('FairPacksComponent', () => {
  let component: FairPacksComponent;
  let fixture: ComponentFixture<FairPacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairPacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
