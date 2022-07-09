import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SpinnerCircleComponent } from './spinner-circle/spinner-circle.component';
import { SpinnerDefaultComponent } from './spinner-default/spinner-default.component';
import { SpinnerDualRingComponent } from './spinner-dual-ring/spinner-dual-ring.component';
import { SpinnerEllipsisComponent } from './spinner-ellipsis/spinner-ellipsis.component';
import { SpinnerFacebookComponent } from './spinner-facebook/spinner-facebook.component';
import { SpinnerGridComponent } from './spinner-grid/spinner-grid.component';
import { SpinnerHeartComponent } from './spinner-heart/spinner-heart.component';
import { SpinnerHourglassComponent } from './spinner-hourglass/spinner-hourglass.component';
import { SpinnerRingComponent } from './spinner-ring/spinner-ring.component';
import { SpinnerRippleComponent } from './spinner-ripple/spinner-ripple.component';
import { SpinnerRollerComponent } from './spinner-roller/spinner-roller.component';
import { SpinnerSpinnerComponent } from './spinner-spinner/spinner-spinner.component';

@NgModule({
  declarations: [
    SpinnerCircleComponent,
    SpinnerDefaultComponent,
    SpinnerDualRingComponent,
    SpinnerEllipsisComponent,
    SpinnerFacebookComponent,
    SpinnerGridComponent,
    SpinnerHeartComponent,
    SpinnerHourglassComponent,
    SpinnerRingComponent,
    SpinnerRippleComponent,
    SpinnerRollerComponent,
    SpinnerSpinnerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerCircleComponent,
    SpinnerDefaultComponent,
    SpinnerDualRingComponent,
    SpinnerEllipsisComponent,
    SpinnerFacebookComponent,
    SpinnerGridComponent,
    SpinnerHeartComponent,
    SpinnerHourglassComponent,
    SpinnerRingComponent,
    SpinnerRippleComponent,
    SpinnerRollerComponent,
    SpinnerSpinnerComponent
  ]
})
export class SpinnerPureCssModule { }
