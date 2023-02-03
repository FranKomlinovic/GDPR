import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionFirstStepComponent } from './revision-first-step.component';

describe('RevisionFirstStepComponent', () => {
  let component: RevisionFirstStepComponent;
  let fixture: ComponentFixture<RevisionFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionFirstStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
