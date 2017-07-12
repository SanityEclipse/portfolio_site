import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLandingComponent } from './site-landing.component';

describe('SiteLandingComponent', () => {
  let component: SiteLandingComponent;
  let fixture: ComponentFixture<SiteLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
