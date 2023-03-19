import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavBarComponent],
})
export class SharedModule {}
