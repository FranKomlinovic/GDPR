import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprViewComponent } from './gdpr-view.component';

describe('GdprViewComponent', () => {
  let component: GdprViewComponent;
  let fixture: ComponentFixture<GdprViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdprViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
