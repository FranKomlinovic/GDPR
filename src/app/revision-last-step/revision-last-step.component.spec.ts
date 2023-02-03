import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionLastStepComponent } from './revision-last-step.component';

describe('RevisionLastStepComponent', () => {
  let component: RevisionLastStepComponent;
  let fixture: ComponentFixture<RevisionLastStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionLastStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionLastStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
