import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsProgressComponent } from './steps-progress.component';

describe('StepsProgressComponent', () => {
  let component: StepsProgressComponent;
  let fixture: ComponentFixture<StepsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
