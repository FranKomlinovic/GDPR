import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprCategoryComponent } from './gdpr-category.component';

describe('GdprCategoryComponent', () => {
  let component: GdprCategoryComponent;
  let fixture: ComponentFixture<GdprCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdprCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
