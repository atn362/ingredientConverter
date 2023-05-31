import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoonMeasurmentsComponent } from './spoon-measurments.component';

describe('SpoonMeasurmentsComponent', () => {
  let component: SpoonMeasurmentsComponent;
  let fixture: ComponentFixture<SpoonMeasurmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpoonMeasurmentsComponent]
    });
    fixture = TestBed.createComponent(SpoonMeasurmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
