import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

const MaterialComponents = [
  MatToolbarModule,
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule {
}
