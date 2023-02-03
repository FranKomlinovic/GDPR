import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionInfoComponent } from './revision-info.component';

describe('RevisionInfoComponent', () => {
  let component: RevisionInfoComponent;
  let fixture: ComponentFixture<RevisionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
