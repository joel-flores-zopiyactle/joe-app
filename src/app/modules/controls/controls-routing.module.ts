import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ControlsPageComponent } from './pages/controls-page/controls-page.component';

const routes: Routes = [
  {
    path: '',
    component: ControlsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlsRoutingModule {}
