import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDatabaseComponent } from './recipe-database.component';

describe('RecipeDatabaseComponent', () => {
  let component: RecipeDatabaseComponent;
  let fixture: ComponentFixture<RecipeDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDatabaseComponent]
    });
    fixture = TestBed.createComponent(RecipeDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
