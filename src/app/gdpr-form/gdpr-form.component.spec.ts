import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprFormComponent } from './gdpr-form.component';

describe('GdprFormComponent', () => {
  let component: GdprFormComponent;
  let fixture: ComponentFixture<GdprFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdprFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
