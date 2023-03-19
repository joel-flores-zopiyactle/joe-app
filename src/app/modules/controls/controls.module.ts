import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepsProgressComponent } from './components/steps-progress/steps-progress.component';
import { ControlsRoutingModule } from './controls-routing.module';
import { ControlsPageComponent } from './pages/controls-page/controls-page.component';

@NgModule({
  declarations: [ControlsPageComponent, StepsProgressComponent],
  imports: [CommonModule, RouterModule, ControlsRoutingModule, SharedModule],
})
export class ControlsModule {}
