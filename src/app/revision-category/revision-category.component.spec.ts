import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionCategoryComponent } from './revision-category.component';

describe('RevisionCategoryComponent', () => {
  let component: RevisionCategoryComponent;
  let fixture: ComponentFixture<RevisionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
