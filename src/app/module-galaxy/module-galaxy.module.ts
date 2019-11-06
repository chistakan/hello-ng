import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPriceComponent } from './show-price/show-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModuleGalaxyComponent } from './module-galaxy.component';

@NgModule({
  declarations: [
    ModuleGalaxyComponent,
    ShowPriceComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModuleGalaxyComponent,
        children: [
          {
            path: 'show',
            component: ShowPriceComponent
          }
        ]
      }
    ])
  ]
})
export class ModuleGalaxyModule { }
