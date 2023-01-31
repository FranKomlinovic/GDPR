import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprDetailsComponent } from './gdpr-details.component';

describe('GdprDetailsComponent', () => {
  let component: GdprDetailsComponent;
  let fixture: ComponentFixture<GdprDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdprDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
