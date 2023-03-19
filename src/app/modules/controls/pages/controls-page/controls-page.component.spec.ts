import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsPageComponent } from './controls-page.component';

describe('ControlsPageComponent', () => {
  let component: ControlsPageComponent;
  let fixture: ComponentFixture<ControlsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
