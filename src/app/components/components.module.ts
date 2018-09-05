import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XTableComponent } from './x-table/x-table.component';
import { XButtonsComponent } from './x-buttons/x-buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XTableComponent, XButtonsComponent]
})
export class ComponentsModule { }
