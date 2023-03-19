import { Component } from '@angular/core';

interface ISteps {
  label: string;
  isActive: boolean;
}

@Component({
  selector: 'app-steps-progress',
  templateUrl: './steps-progress.component.html',
  styleUrls: ['./steps-progress.component.scss'],
})
export class StepsProgressComponent {
  currentStep = 0;

  stepsLabels: ISteps[] = [
    { label: 'Step 1', isActive: true },
    { label: 'Step 2', isActive: false },
    { label: 'Step 3', isActive: false },
  ];

  onHandlePrev() {
    if (this.currentStep === 0) return;
    if (!this.stepsLabels[this.currentStep]) return;
    this.stepsLabels[this.currentStep].isActive = false;
    this.currentStep--;
  }

  onHandleNext() {
    if (this.currentStep < this.stepsLabels.length - 1) this.currentStep++;
    if (!this.stepsLabels[this.currentStep]) return;
    this.stepsLabels[this.currentStep].isActive = true;
  }
}
