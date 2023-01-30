import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent, ButtonComponent, TableComponent],
  exports: [NavComponent, ButtonComponent, TableComponent],
})
export class UiModule {}
