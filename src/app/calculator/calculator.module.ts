import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './components';
import { CalculatorService } from './services'

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
